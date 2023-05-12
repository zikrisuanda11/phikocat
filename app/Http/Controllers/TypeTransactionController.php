<?php

namespace App\Http\Controllers;

use App\Http\Requests\TypeTransactionRequest;
use Illuminate\Http\Request;
use App\Models\TypeTransaction;

class TypeTransactionController extends Controller
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
    public function store(TypeTransactionRequest $request)
    {
        $data = TypeTransaction::create([
            'type_transaction_name' => $request->type_transaction_name
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
    public function update(TypeTransactionRequest $request, string $id)
    {
        $data = TypeTransaction::find($id);
        $data->update([
            'type_transaction_name' => $request->type_transaction_name
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = TypeTransaction::find($id);
        $data->delete();
    }
}
