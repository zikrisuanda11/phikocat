<?php

use App\Http\Controllers\Admin\HistoryController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ProductPetController;
use App\Http\Controllers\Admin\ServicePetController;
use App\Http\Controllers\Admin\TypeProductController;
use App\Http\Controllers\Admin\UserController;

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

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('home', [\App\Http\Controllers\HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/histories', [HistoryController::class, 'index']);
Route::get('/histories/{id}/detail', [HistoryController::class, 'detail']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function () {
        Route::resource('/products', ProductPetController::class);


        Route::resource('/services', ServicePetController::class);
        Route::resource('/users', UserController::class);
        Route::resource('/type-products', TypeProductController::class);
    });

    Route::middleware('role:manager')->group(function () {
    });

    Route::middleware('role:customer')->group(function () {
    });
});

require __DIR__ . '/auth.php';
