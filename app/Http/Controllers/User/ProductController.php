<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ProductPet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->query('keywords');
        $product = ProductPet::where('stock_product', '>', 0)
            ->where('name_product', 'ILIKE', "%{$query}%")
            ->get();
        return Inertia::render('Product/index', [
            'product' => $product,
        ]);
    }
}
