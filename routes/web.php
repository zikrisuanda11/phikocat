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
Route::resource('/products', ProductPetController::class);
Route::get('/histories', [HistoryController::class, 'index']);
Route::get('/histories/{id}/detail', [HistoryController::class, 'detail']);
Route::resource('/services', ServicePetController::class);
Route::resource('/users', UserController::class);
Route::resource('/type-products', TypeProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
