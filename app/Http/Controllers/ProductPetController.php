<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductPetRequest;
use App\Models\ProductPet;
use Illuminate\Http\Request;

class ProductPetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ProductPet::all();
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
    public function store(ProductPetRequest $request)
    {
        $data = ProductPet::create([
            'name_product' => $request->name_product,
            'description_product' => $request->description_product,
            'price_product' => $request->price_product,
            'stock_product' => $request->stock_product,
            'type_product_id' => $request->type_product_id
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
    public function update(ProductPetRequest $request, string $id)
    {
        $data = ProductPet::find($id);
        $data->update([
            'name_product' => $request->name_product,
            'description_product' => $request->description_product,
            'price_product' => $request->price_product,
            'stock_product' => $request->stock_product,
            'type_product_id' => $request->type_product_id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = ProductPet::find($id);
        $data->delete();
    }
}
