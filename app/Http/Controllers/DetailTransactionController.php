<?php

namespace App\Http\Controllers;

use App\Models\DetailTransaction;
use App\Models\Transaction;
use App\Models\TypeTransaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DetailTransactionController extends Controller
{
    public function show($id)
    {
        $transaction = Transaction::where('id', $id)->first();
        $transactionDetails = DetailTransaction::where('transaction_id', $id)->get();
        $typeTransaction = TypeTransaction::where('id', $transaction->type_transaction_id)->first();
        $user = User::where('id', $transaction->user_id)->first();
        $transactionDetails->load('productPets', 'servicePet', 'transaction.typeTransaction');

        if(Auth::user()->hasRole('admin')){
            return inertia('Admin/DetailTransaction/index', [
                'transactionDetails' => $transactionDetails,
            'transaction' => $transaction,
            'typeTransaction' => $typeTransaction->type_transaction_name,
            'user' => $user
            ]);
        }

        return inertia('DetailTransaction/index', [
            'transactionDetails' => $transactionDetails,
            'transaction' => $transaction,
            'typeTransaction' => $typeTransaction->type_transaction_name,
            'user' => $user
        ]);
    }
}
