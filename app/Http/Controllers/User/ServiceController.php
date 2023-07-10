<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ServicePet;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = ServicePet::orderBy('id', 'ASC')->get();
        return inertia('Customer/Service/index', [
            'services' => $services
        ]);
    }

    public function grooming()
    {

        return inertia('Customer/Service/grooming');
    }

    public function petHotel()
    {
        return inertia('Customer/Service/petHotel');
    }
}

