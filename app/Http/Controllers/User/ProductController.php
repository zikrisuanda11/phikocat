<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ProductPet;
use App\Models\TypeProductPet;
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
            ->orderBy('price_product', 'asc')
            ->get();
        $typeProduct = TypeProductPet::all();
        return Inertia::render('Product/index', [
            'product' => $product,
            'typeProduct' => $typeProduct
        ]);
    }

    public function update(Request $request)
    {
        $type_product_id = $request->type_product_id;
        $query = $request->query('keywords');
        $product = ProductPet::where('stock_product', '>', 0)
            ->when(!empty($type_product_id), function ($query) use ($type_product_id) {
                return $query->whereIn('type_product_id', $type_product_id);
            })
            ->where('name_product', 'ILIKE', "%{$query}%")
            ->orderBy('price_product', $request->sort_price)
            ->get();
        $typeProduct = TypeProductPet::all();
        return Inertia::render('Product/index', [
            'product' => $product,
            'typeProduct' => $typeProduct
        ]);
    }
}
