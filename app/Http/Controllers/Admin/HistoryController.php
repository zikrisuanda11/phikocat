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
        return inertia('Admin/History/Index', [
            'transactions' => $transactions,
            'detail_transaction' => $detailTransaction
        ]);
    }

    public function detail(Request $request)
    {
        $transaction = Transaction::where('id', $request->id)->with('user', 'typeTransaction', 'detailTransactions.productPets', 'detailTransactions.servicePet')->first();
        return inertia('Admin/History/Detail', [
            'transaction' => $transaction
        ]);
    }

}
