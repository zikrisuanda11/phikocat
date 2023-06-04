<?php

namespace App\Http\Controllers\Admin;

use App\Models\ServicePet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ServicePetRequest;

class ServicePetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $servicePets = ServicePet::all();
        return inertia('Admin/ServicePet/Index', [
            'servicePets' => $servicePets
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/ServicePet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServicePetRequest $request)
    {
        ServicePet::create([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
            'type_service' => $request->type_service,
            'description_service' => $request->description_service
        ]);

        return redirect()->route('services.index')->with('message', 'Data berhasil disimpan');
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
        $servicePet = ServicePet::find($id);
        return inertia('Admin/ServicePet/Edit', [
            'servicePet' => $servicePet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ServicePetRequest $request, string $id)
    {
        $data = ServicePet::find($id);
        $data->update([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
            'type_service' => $request->type_service,
            'description_service' => $request->description_service
        ]);

        return redirect()->route('services.index')->with('message', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = ServicePet::find($id);
        $data->delete();

        return redirect()->route('services.index')->with('message', 'Data berhasil dihapus');
    }
}
