<?php

namespace App\Http\Controllers\User;

use App\Models\Cart;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = Cart::where('user_id', auth()->user()->id)->with('User', 'ProductPet')->orderBy('id', 'ASC')->get();
        $cartsTotal = DB::table('carts')->select('*', DB::raw('product_pets.price_product * quantity as total_price'))
            ->join('product_pets', 'carts.product_id', '=', 'product_pets.id')
            ->where('user_id', '=', auth()->user()->id)
            ->get();
        $total = $cartsTotal->sum('total_price');
        $midtranClientKey = config('services.midtrans.client');
        return Inertia::render('Cart/index', [
            'carts' => $carts,
            'total_price' => $total,
            'midtranClientKey' => $midtranClientKey
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $productId = $request->product_id;
        $user = auth()->user();

        $cart = Cart::where('product_id', $productId)->where('user_id', $user->id)->first();
        // dd($cart);
        if($cart != null){
            $cart->update([
                'quantity' => $cart->quantity + 1
            ]);
            session()->flash('message', 'Product ditambahkan');

            // return redirect()->back()->with('message', 'Product ditambahkan');
        }else{
            Cart::create([
                'user_id' => Auth::user()->id,
                'product_id' => $productId,
                'quantity' => 1
            ]);

            session()->flash('message', 'Product ditambahkan');

            // return redirect()->back()->with('message', 'Product ditambahkan');
        }
    }

    public function increment(Request $request)
    {
        $productId = $request->product_id;
        $userId = auth()->user()->id;

        $cart = Cart::where('product_id', $productId)->where('user_id', $userId)->first();

        if ($cart != null) {
            $cart->update([
                'quantity' => $cart->quantity + 1
            ]);
        }
    }

    public function decrement(Request $request)
    {
        $productId = $request->product_id;
        $userId = auth()->user()->id;

        $cart = Cart::where('product_id', $productId)->where('user_id', $userId)->first();

        if($cart->quantity > 1){
            if ($cart != null) {
                $cart->update([
                    'quantity' => $cart->quantity - 1
                ]);
            }
        }else{
            $cart->delete();
        }
    }

    /**
     * Display the specified resource.
     */
    public function status()
    {
        // terus data transaksinya diambil dari sini
        // $transaction = Transaction::with('detailTransactions', 'typeTransaction', 'user')->where('user_id', auth()->user()->id)->get();
        return inertia('Cart/status', [
            // 'transaction' => $transaction
        ]);
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
        $cart = Cart::find($id);
        $cart->delete();
    }
}
