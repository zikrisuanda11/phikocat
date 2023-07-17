<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\User;
use Inertia\Middleware;
use App\Models\ProductPet;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        if (auth()->user()) {
            // $product = ProductPet::all();
            return array_merge(parent::share($request), [
                'flash' => [
                    'message' => $request->session()->get('message'),
                    'error' => $request->session()->get('error'),
                    'data' => $request->session()->get('data'),
                ],
                'auth' => [
                    'user' => auth()->user(),
                    'roles' => Auth::user()->hasRole('admin'),
                    // 'product' => $product
                ],
                'admin' => User::whereHas('roles', function ($query) {
                        $query->where('name', 'admin');
                    })->first(),
                'ziggy' => function () use ($request) {
                    return array_merge((new Ziggy)->toArray(), [
                        'location' => $request->url(),
                    ]);
                },
                'count_product' => Cart::where('user_id', auth()->user()->id)->count(),
            ]);
        } else {
            return array_merge(parent::share($request), [
                'flash' => [
                    'message' => $request->session()->get('message'),
                    'error' => $request->session()->get('error'),
                ],
                'auth' => [
                    'user' => $request->user(),
                ],
                'ziggy' => function () use ($request) {
                    return array_merge((new Ziggy)->toArray(), [
                        'location' => $request->url(),
                    ]);
                }
            ]);
        }
    }
}
