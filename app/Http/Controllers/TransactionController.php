<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(TransactionRequest $request)
    {
        $data = Transaction::create([
            'date_transaction' => $request->date_transaction,
            'amount' => $request->amount,
            'type_transaction_id' => $request->type_transaction_id,
            'type_payment'  => $request->type_payment,
            'status_transaction' => $request->status_transaction,
            'evidence_of_transfer' => $request->evidence_of_transfer
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function update(TransactionRequest $request, string $id)
    {
        $data = Transaction::find($id);
        $data->update([
            'date_transaction' => $request->date_transaction,
            'amount' => $request->amount,
            'type_transaction_id' => $request->type_transaction_id,
            'type_payment'  => $request->type_payment,
            'status_transaction' => $request->status_transaction,
            'evidence_of_transfer' => $request->evidence_of_transfer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Transaction::find($id);
        $data->delete();
    }
}
