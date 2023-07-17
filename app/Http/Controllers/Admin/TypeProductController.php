<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TypeProductPet;
use Illuminate\Http\Request;

class TypeProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = TypeProductPet::all();
        return inertia('Admin/TypeProductPet/Index',[
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/TypeProductPet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        TypeProductPet::create([
            'name_type' => $request->name_type
        ]);

        return redirect()->route('type-products.index')->with('message', 'Berhasil menambahkan data');
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
        $typeProductPet = TypeProductPet::find($id);
        return inertia('Admin/TypeProductPet/Edit', [
            'typeProductPet' => $typeProductPet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $typeProductPet = TypeProductPet::find($id);
        $typeProductPet->update([
            'name_type' => $request->name_type
        ]);

        return redirect()->route('type-products.index')->with('message', 'Berhasil merubah data');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $typeProductPet = TypeProductPet::find($id);
        $typeProductPet->delete();

        return redirect()->route('type-products.index')->with('message', 'Berhasil menghapus data');
    }
}
