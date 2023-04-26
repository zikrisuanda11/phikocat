<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $name = "Inertia app";

        return Inertia('Home', [
            'name' => $name
        ]);
    }
}
