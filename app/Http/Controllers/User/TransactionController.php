<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\User;
use Midtrans\Config;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\TypeTransaction;
use App\Models\DetailTransaction;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\ServicePet;

// TODO UBAH $request->user_id jadi auth()->user() nanti
class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        // dd($userId);
        // $transaction = Transaction::all();
        $transaction = Transaction::with('detailTransactions', 'typeTransaction', 'user')->where('user_id', $request->query('user_id'))->get();
        // dd($transaction);
        return response()->json([
            'message' => 'Success get data',
            'data' => $transaction
        ]);
        // try{
        // }catch (\Exception $e){
        //     return response()->json([
        //         'message' => 'data not found',
        //         'error' => $e->getMessage()
        //     ], 500);
        // }

    }

    public function petHotel(Request $request)
    {
        // checkout dikurangin checkin untuk mendapatkan brp hari dia nginap
        // dd($request->all());
        $user = auth()->user();
        $request->validate([
            'type_transaction_id' => 'required',
            'type_payment' => 'required',
            'date_checkin' => 'required',
            'date_checkout' => 'required',
        ]);

        $typeTransaction = TypeTransaction::where('id', $request->type_transaction_id)->first();
        if ($typeTransaction->type_transaction_name == 'products') {
            return session()->flash('error', 'Cannot process transaction');
        }

        $dateCheckin = Carbon::parse($request->date_checkin);
        $dateCheckout = Carbon::parse($request->date_checkout);
        $quantity = $dateCheckout->diffInDays($dateCheckin);

        $service = ServicePet::where('type_service', 'pet_hotel')->first();

        $total = $quantity > 0 ? $quantity * $service->price_service += $service->price_service : $service->price_service;

        if ($request->type_payment == 'cod') {
            try {
                DB::beginTransaction();
                $transaction = Transaction::create([
                    'user_id' => $user->id,
                    'date_transaction' => Carbon::now(),
                    'amount' => $total,
                    'type_transaction_id' => $request->type_transaction_id,
                    'type_payment' => $request->type_payment,
                    'status_transaction' => 'pending',
                ]);

                DetailTransaction::create([
                    'transaction_id' => $transaction->id,
                    'service_id' => $service->id,
                    'quantity' => $quantity,
                    'date_checkin' => $request->date_checkin,
                    'date_checkou' => $request->date_checkou,
                    'amount' => $total,
                ]);

                DB::commit();
                return to_route('checkout.grooming.groomingStatus', ['id_transaction' => $transaction->id]);
            } catch (\Exception $e) {
                // TODO ubah jadi flash error
                return response()->json($e->getMessage());
            }
        }
    }

    public function grooming(Request $request)
    {
        // return response()->json($request->all());
        // dd($request->all());
        $user = auth()->user();
        $request->validate([
            'type_transaction_id' => 'required',
            'type_payment' => 'required',
            'date_service' => 'required'
        ]);

        $typeTransaction = TypeTransaction::where('id', $request->type_transaction_id)->first();
        if ($typeTransaction->type_transaction_name == 'products') {
            return session()->flash('error', 'Cannot process transaction');
        }

        if ($request->type_payment == 'transfer') {
        }
        if ($request->type_payment == 'cod') {
            $service = ServicePet::where('type_service', 'grooming')->first();
            // dd($total);
            // return response()->json($total);

            try {
                // dd('initereksekusi');
                DB::beginTransaction();

                $transaction = Transaction::create([
                    'user_id' => $user->id,
                    'date_transaction' => Carbon::now(),
                    'amount' => $service->price_service,
                    'type_transaction_id' => $request->type_transaction_id,
                    'type_payment' => $request->type_payment,
                    'status_transaction' => 'pending',
                ]);

                DetailTransaction::create([
                    'transaction_id' => $transaction->id,
                    'service_id' => $service->id,
                    'quantity' => 1,
                    'date_service' => $request->date_service,
                    'amount' => $service->price_service,
                ]);

                DB::commit();
                return to_route('checkout.grooming.groomingStatus', ['id_transaction' => $transaction->id]);
            } catch (\Exception $e) {
                return response()->json($e->getMessage());
                // TODO ubah jadi flash error
                // session()->flash('error', 'Gagal melakukan transaksi');
            }
        }
    }

    public function paymentCash()
    {
    }

    public function paymentTransfer($snap_token)
    {
        // dd($snap_token);
        $midtransClientKey = config('services.midtrans.client');
        return inertia('Customer/Transaction/transfer', [
            'snapToken' => $snap_token,
            'midtransClientKey' => $midtransClientKey
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $user = auth()->user();
        $request->validate([
            'type_transaction_id' => 'required',
            'type_payment' => 'required',

        ]);
        // jika type transaction product eksekusi product
        // jika type transaction service ekeskusi service transaksi
        $typeTransaction = TypeTransaction::where('id', $request->type_transaction_id)->first();

        if ($typeTransaction->type_transaction_name == 'products') {
            if ($request->type_payment == 'transfer') {
                $carts = DB::table('carts')->select('*', DB::raw('product_pets.price_product * quantity as total_price'))
                    ->join('product_pets', 'carts.product_id', '=', 'product_pets.id')
                    ->where('user_id', '=', $user->id)->get();

                if ($carts->count() == 0) {
                    return response()->json([
                        'message' => 'cart empty'
                    ], 422);
                }

                $total = $carts->sum('total_price');

                try {
                    DB::beginTransaction();
                    $transaction = Transaction::create([
                        'user_id' => $user->id,
                        'date_transaction' => Carbon::now(),
                        'amount' => $total,
                        'type_transaction_id' => $request->type_transaction_id,
                        'type_payment' => $request->type_payment,
                        'status_transaction' => 'pending',
                    ]);

                    foreach ($carts as $cart) {
                        DetailTransaction::create([
                            'transaction_id' => $transaction->id,
                            'product_id' => $cart->product_id,
                            'quantity' => $cart->quantity,
                            'amount' => $cart->total_price
                        ]);
                    }

                    Config::$serverKey = config('services.midtrans.server');
                    Config::$isProduction = false;
                    Config::$isSanitized = true;
                    Config::$is3ds = true;

                    $params = array(
                        'transaction_details' => array(
                            'order_id' => $transaction->id,
                            'gross_amount' => $total,
                        ),
                        'customer_details' => array(
                            'name' => $user->name,
                            'email' => $user->email,
                            'phone' => $user->phone,
                        ),
                    );

                    $snapToken = \Midtrans\Snap::getSnapToken($params);

                    Cart::where('user_id', $user->id)->delete();

                    DB::commit();

                    // apakah disini berupa redirect saja? 
                    return redirect()->route('transaction.paymentTransfer', ['snap_token' => $snapToken]);
                    // return inertia('Cart/index', [
                    //     'status' => 'success',
                    //     'snapToken' => $snapToken,
                    //     'dataTransaction' => $transaction
                    // ]);

                } catch (\Exception $e) {
                    DB::rollBack();

                    return response()->json([
                        'message' => 'transaksi gagal',
                        'error' => $e->getMessage()
                    ], 500);
                }
            } else if ($request->type_payment == 'cod') {
                $carts = DB::table('carts')->select('*', DB::raw('product_pets.price_product * quantity as total_price'))
                    ->join('product_pets', 'carts.product_id', '=', 'product_pets.id')
                    ->where('user_id', '=', $user->id)->get();

                if ($carts->count() == 0) {
                    return session()->flash('message', '😞 Keranjang kosong');
                }

                $total = $carts->sum('total_price');

                try {
                    DB::beginTransaction();
                    $transaction = Transaction::create([
                        'user_id' => $user->id,
                        'date_transaction' => Carbon::now(),
                        'amount' => $total,
                        'type_transaction_id' => $request->type_transaction_id,
                        'type_payment' => $request->type_payment,
                        'status_transaction' => 'pending',
                    ]);

                    foreach ($carts as $cart) {
                        DetailTransaction::create([
                            'transaction_id' => $transaction->id,
                            'product_id' => $cart->product_id,
                            'quantity' => $cart->quantity,
                            'amount' => $cart->total_price
                        ]);
                    }

                    Cart::where('user_id', auth()->user()->id)->delete();

                    DB::commit();

                    return redirect()->route('transaction.show', ['id' => $transaction->id])->with('message', 'Silahkan lakukan pembayaran dikasir');
                } catch (\Exception $e) {
                    DB::rollBack();

                    return response()->json([
                        'message' => 'transaksi gagal',
                        'error' => $e->getMessage()
                    ], 500);
                }
                // checkout semua cart ubah status_transaction pending dan buat pesan tunggu konfirmasi dari admin
                // return redirect()->route('cart.show');
            }
        } else if ($typeTransaction->type_transaction_name == 'service') {
            if ($request->type_payment == 'transfer') {
            } else if ($request->type_payment == 'cod') {
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $transaction = Transaction::find($id);
        $transactionDetail = DetailTransaction::where('transaction_id', $transaction->id)->get();
        return inertia('Cart/status', [
            'transaction' => $transaction,
            'transactionDetail' => $transactionDetail
        ]);
    }

    public function callback(Request $request)
    {
        $serverKey = config('services.midtrans.server');
        $hashed = hash('sha512', $request->order_id . $request->status_code . $request->gross_amount . $serverKey);

        if ($hashed === $request->signature_key) {
            if ($request->transaction_status === 'settlement' || $request->transaction_status === 'success') {
                $transaction = Transaction::find($request->order_id);
                $transaction->update(['status_payment' => 'success']);
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $transactions = Transaction::find($id);
        $transactions->delete();

        return response()->json([
            'message' => 'success delete transaction'
        ]);
    }
}
