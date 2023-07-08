<?php

use App\Http\Controllers\Admin\ConfirmController;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\Admin\HistoryController;
use App\Http\Controllers\Admin\ProductPetController;
use App\Http\Controllers\Admin\ServicePetController;
use App\Http\Controllers\User\TransactionController;
use App\Http\Controllers\Admin\TypeProductController;
use App\Http\Controllers\User\ProductCheckoutController;
use App\Models\Transaction;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// if(Route::middleware(['auth','role:admin'])){
//     Route::get('/', function () {
//         return Inertia::render('Landing/index');
//     })->name('landing');
// }


Route::get('/', function () {
    return Inertia::render('Landing/index');
})->name('landing');

Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::post('/clear-flash', function (Request $request) {
    $request->session()->forget('message');
});

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::resource('/products', ProductPetController::class)->except('update');
        Route::post('/products/{id}', [ProductPetController::class, 'update']);
        Route::get('/histories', [HistoryController::class, 'index']);
        Route::get('/histories/{id}/detail', [HistoryController::class, 'detail']);
        Route::get('/confirm', [ConfirmController::class, 'index']);
        Route::put('/confirm', [ConfirmController::class, 'update']);
        Route::resource('/services', ServicePetController::class);
        Route::resource('/users', UserController::class);
        Route::resource('/type-products', TypeProductController::class);
    });

    Route::middleware('role:manager')->group(function () {
    });

    Route::middleware('role:customer')->group(function () {
        Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
        Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
        Route::get('/cart/status/{id}', [CartController::class, 'status'])->name('cart.status');
        Route::get('transaction/{id}', [TransactionController::class, 'show'])->name('transaction.show');

        Route::put('/increment-cart', [CartController::class, 'increment']);
        Route::put('/decrement-cart', [CartController::class, 'decrement']);
        Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');

        Route::post('checkout', [TransactionController::class, 'store']);
    });
});

require __DIR__ . '/auth.php';
