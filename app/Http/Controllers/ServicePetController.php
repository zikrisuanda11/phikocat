<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServicePetRequest;
use App\Models\ServicePet;
use Illuminate\Http\Request;

class ServicePetController extends Controller
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
    public function store(ServicePetRequest $request)
    {
        $data = ServicePet::create([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
            'type_service' => $request->type_service,
            'description_service' => $request->description_service
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
    public function update(ServicePetRequest $request, string $id)
    {
        $data = ServicePet::find($id);
        $data->update([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
            'type_service' => $request->type_service,
            'description_service' => $request->description_service
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = ServicePet::find($id);
        $data->delete();
    }
}
