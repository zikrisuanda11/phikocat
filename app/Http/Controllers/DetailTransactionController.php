<?php

namespace App\Http\Controllers;

use App\Http\Requests\DetailTransactionRequest;
use Illuminate\Http\Request;
use App\Models\DetailTransaction;

class DetailTransactionController extends Controller
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
    public function store(DetailTransactionRequest $request)
    {
        $data = DetailTransaction::create([
            'transaction_id' => $request->transaction_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'service_id' => $request->service_id,
            'date_service' => $request->date_service,
            'date_checkin' => $request->date_checkin,
            'date_out' => $request->date_out,
            'amount' => $request->amount
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
    public function update(DetailTransactionRequest $request, string $id)
    {
        $data = DetailTransaction::find($id);
        $data->update([
            'transaction_id' => $request->transaction_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'service_id' => $request->service_id,
            'date_service' => $request->date_service,
            'date_checkin' => $request->date_checkin,
            'date_out' => $request->date_out,
            'amount' => $request->amount
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = DetailTransaction::find($id);
        $data->delete();
    }
}
