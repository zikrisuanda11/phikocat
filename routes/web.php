<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\HistoryController;
use App\Http\Controllers\Admin\ProductPetController;
use App\Http\Controllers\Admin\ServicePetController;
use App\Http\Controllers\Admin\TypeProductController;
use App\Http\Controllers\User\ProductController;

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', function () {
    return Inertia::render('Landing/index');
});

Route::get('/product', [ProductController::class, 'index']);
Route::get('/product-list', [ProductController::class, 'show']);


// Route::get('home', [\App\Http\Controllers\HomeController::class, 'index']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');

Route::get('/histories', [HistoryController::class, 'index']);
Route::get('/histories/{id}/detail', [HistoryController::class, 'detail']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function () {
        Route::resource('/products', ProductPetController::class)->except('update');
        Route::post('/products/{id}', [ProductPetController::class, 'update']);

        Route::resource('/services', ServicePetController::class);
        Route::resource('/users', UserController::class);
        Route::resource('/type-products', TypeProductController::class);
    });

    Route::middleware('role:manager')->group(function () {
    });

    Route::middleware('role:customer')->group(function () {
    });
});

require __DIR__.'/auth.php';
