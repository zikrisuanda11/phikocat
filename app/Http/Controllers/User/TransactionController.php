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

    public function paymentTransfer($snap_token)
    {
        // dd($snap_token);
        $midtransClientKey = config('services.midtrans.client');
        return inertia('Customer/Transaction/process', [
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
            if($request->type_payment == 'transfer'){
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
            }else if($request->type_payment == 'cod'){
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
        }

        // $data = Transaction::create([
        //     // date_transaction pake Carbon::now
        //     'date_transaction' => $request->date_transaction,
        //     // amount dari total keseluruhan harga
        //     'amount' => $request->amount,
        //     // type transaction dari $request
        //     'type_transaction_id' => $request->type_transaction_id,
        //     // type payment dari $request
        //     'type_payment'  => $request->type_payment,
        //     // status transaction dari proses transaksi
        //     'status_transaction' => $request->status_transaction,
        //     // bukti pembayaran jika pembayaran menggunakan transfer
        //     'evidence_of_transfer' => $request->evidence_of_transfer
        // ]);
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
