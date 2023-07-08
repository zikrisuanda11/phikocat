<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HistoryController;
use App\Http\Controllers\User\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('history/{id}/detail', [HistoryController::class, 'detailJson']);

// Route::get('my-transaction', [TransactionController::class, 'index']);
// Route::get('transaction/{id}', [TransactionController::class, 'destroy']);
// Route::post('checkout', [TransactionController::class, 'store']);

Route::get('tes', function(){
    return 'ini test';
});
Route::post('midtrans-callback', [TransactionController::class, 'callback']);