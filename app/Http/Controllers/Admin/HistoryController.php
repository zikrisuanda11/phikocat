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
        $transactions = Transaction::with('user', 'typeTransaction')->orderBy('date_transaction', 'desc')->get();
        $detailTransaction = DetailTransaction::with('productPets', 'servicePet')->get();
        // TODO buat history transaksi bisa di click detail
        return inertia('Admin/History/Index', [
            'transactions' => $transactions,
            'detail_transaction' => $detailTransaction
        ]);
    }

    public function detail(Request $request)
    {
        // TODO uji jika didalam transaksi hanya ada 1 product, atau service
        $transaction = Transaction::where('id', $request->id)->with('user', 'typeTransaction', 'detailTransactions.productPets', 'detailTransactions.servicePet')->first();
        // return response()->json([
        //     'data' => $transaction
        // ]);
        return inertia('Admin/History/Detail', [
            'transaction' => $transaction
        ]);
    }

    // public function detailJson(Request $request)
    // {
    //     $transactions = Transaction::with('detailTransaction')->where('id', $request->id)->with('user', 'typeTransaction')->get();
    //     // $detailTransaction = DetailTransaction::where('id',$request->id)->with('transaction', 'productPets', 'servicePet')->first();
    //     return response()->json([
    //         // 'detail_transaction' => $detailTransaction,
    //         'transaction' => $transactions
    //     ]);
    // }
}
