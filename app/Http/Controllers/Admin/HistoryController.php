<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DetailTransaction;
use App\Models\Transaction;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transaction::with('user', 'typeTransaction')->get();
        $detailTransaction = DetailTransaction::with('productPets', 'servicePet')->get();
        // TODO buat history transaksi bisa di click detail
        return inertia('Admin/History/Index', [
            'transactions' => $transactions,
            'detail_transaction' => $detailTransaction
        ]);
    }

    public function detail(Request $request)
    {
        $transaction = Transaction::where('id', $request->id)->with('user', 'typeTransaction')->first();
        $detailTransaction = DetailTransaction::where('id',$request->id)->with('transaction', 'productPets', 'servicePet')->first();
        return inertia('Admin/History/Detail', [
            'detail_transaction' => $detailTransaction,
            'transaction' => $transaction
        ]);
    }

    public function detailJson(Request $request)
    {
        $transactions = Transaction::where('id', $request->id)->with('user', 'typeTransaction')->get();
        $detailTransaction = DetailTransaction::where('id',$request->id)->with('transaction', 'productPets', 'servicePet')->first();
        return response()->json([
            'detail_transaction' => $detailTransaction,
            'transaction' => $transactions
        ]);
    }
}
