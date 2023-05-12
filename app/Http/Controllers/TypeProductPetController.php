<?php

namespace App\Http\Controllers;

use App\Http\Requests\TypeProductPetRequest;
use App\Models\TypeProductPet;
use Illuminate\Http\Request;

class TypeProductPetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = TypeProductPet::customPaginate();
        return response()->json([
            'data' => $data
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
    public function store(TypeProductPetRequest $request)
    {
        $data = TypeProductPet::create([
            'name_type' => $request->name_type
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
    public function update(TypeProductPetRequest $request, string $id)
    {
        $data = TypeProductPet::find($id);
        $data->update([
            'name_type' => $request->name_type
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = TypeProductPet::find($id);
        $data->delete;
    }
}
