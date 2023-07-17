<?php

namespace App\Http\Controllers\Admin;

use App\Models\ProductPet;
use Illuminate\Http\Request;
use App\Models\TypeProductPet;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ProductPetRequest;
use Illuminate\Support\Facades\File;

class ProductPetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = ProductPet::with('typeProducts')->get();
        // dd($data);
        return inertia('Admin/ProductPet/Index', [
            'datas' => $datas
        ]);

        // return route('products.index')
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $typeProductPet = TypeProductPet::all();
        $formattedTypeProductPet = $typeProductPet->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => $data->name_type,
                'created_at' => $data->created_at,
                'updated_at' => $data->updated_at,
            ];
        });
        return inertia('Admin/ProductPet/Create', [
            'typeProductPets' => $formattedTypeProductPet
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductPetRequest $request)
    {
        $path = Storage::put('public/product_image', $request->file('photo_product'));
        $pathUrl = Storage::url($path);

        ProductPet::create([
            'name_product' => $request->name_product,
            'description_product' => $request->description_product,
            'price_product' => $request->price_product,
            'stock_product' => $request->stock_product,
            'type_product_id' => $request->type_product_id,
            'photo_product' => $pathUrl
        ]);

        return redirect()->route('products.index')->with('message', 'Data Berhasil Disimpan');
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
        $productPet = ProductPet::find($id);
        $typeProductPets = TypeProductPet::all();
        $formattedTypeProductPet = $typeProductPets->map(function ($data) {
            return [
                'id' => $data->id,
                'name' => $data->name_type,
                'created_at' => $data->created_at,
                'updated_at' => $data->updated_at,
            ];
        });
        return inertia('Admin/ProductPet/Edit', [
            'productPet' => $productPet,
            'typeProductPets' => $formattedTypeProductPet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name_product' => 'required',
            'description_product' => 'required',
            'price_product' => 'required',
            'stock_product' => 'required',
            'type_product_id' => 'required',
        ]);

        $data = ProductPet::find($id);

        if (!$request->file('photo_product')) {
            $data->update([
                'name_product' => $request->name_product,
                'description_product' => $request->description_product,
                'price_product' => $request->price_product,
                'stock_product' => $request->stock_product,
                'type_product_id' => $request->type_product_id
            ]);
            return redirect()->route('products.index')->with('message', 'Data berhasil diubah');
        }

        if(File::exists(public_path($data->photo_product))){
            File::delete(public_path($data->photo_product));
            $path = Storage::put('public/product_image', $request->file('photo_product'));
            $pathUrl = Storage::url($path);
            $data->update([
                'name_product' => $request->name_product,
                'description_product' => $request->description_product,
                'price_product' => $request->price_product,
                'stock_product' => $request->stock_product,
                'type_product_id' => $request->type_product_id,
                'photo_product' => $pathUrl
            ]);
            return redirect()->route('products.index')->with('message', 'Data berhasil diubah');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = ProductPet::find($id);
        if(File::exists(public_path($data->photo_product))){
            File::delete(public_path($data->photo_product));
            $data->delete();
            return redirect()->route('products.index')->with('message', 'Data berhasil dihapus');
        }
        $data->delete();
        return redirect()->route('products.index')->with('message', 'Data berhasil dihapus');
    }
}
