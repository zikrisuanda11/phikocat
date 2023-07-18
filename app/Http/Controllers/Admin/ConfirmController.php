<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class ConfirmController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('detailTransactions', 'user', 'typeTransaction')->where('type_payment', 'cod')->orderBy('date_transaction', 'desc')->get();
        return inertia('Admin/ConfirmPayment/index', [
            'transactions' => $transactions
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        $transaction = Transaction::find($request->id);
        $transaction->update([
            'status_transaction' => 'success'
        ]);

        session()->flash('message', 'Berhasil konfirmasi pembayaran');
    }
}
