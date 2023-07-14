<?php

namespace App\Http\Controllers;

use App\Models\ProductPet;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Begin::data total perbulan
        $dateTotal = Carbon::now()->firstOfMonth();
        $month = $dateTotal->format('m');
        $year = $dateTotal->format('Y');
        $transaction = Transaction::whereMonth('date_transaction', $month)
            ->whereYear('date_transaction', $year)
            ->get();
        $product = ProductPet::all()->count();

        $total_pendapatan = $transaction->sum('amount');
        $total_order = $transaction->count();
        // END::data perbulan

        // Begin::laporan penjualan
        $transactions = Transaction::whereMonth('date_transaction', $month)
            ->whereYear('date_transaction', $year)
            ->paginate(10);
        // End::laporan penjualan

        return inertia('Dashboard', [
            'data' => [
                'total_pendapatan' => $total_pendapatan,
                'total_produk' => $product,
                'total_order' => $total_order,
                'transactions' => $transactions
            ]
        ]);
    }

    public function update(Request $request)
    {
        // Begin::data total perbulan
        $dateTotal = Carbon::parse($request->date_total)->firstOfMonth();
        $month = $dateTotal->format('m');
        $year = $dateTotal->format('Y');
        $transaction = Transaction::whereMonth('date_transaction', $month)
            ->whereYear('date_transaction', $year)
            ->get();
        $product = ProductPet::all()->count();

        $total_pendapatan = $transaction->sum('amount');
        $total_order = $transaction->count();
        // End::data total perbulan

        // Begin::laporan penjualan
        // ganti bulannya berdasarkan select laporan penjualan
        $dateReport = Carbon::parse($request->date_report)->firstOfMonth();
        $month = $dateReport->format('m');
        $year = $dateReport->format('Y');
        $transactions = Transaction::whereMonth('date_transaction', $month)
            ->whereYear('date_transaction', $year)
            ->paginate(10);
        // End::laporan penjualan

        session()->flash('message', 'Tanggal telah diubah');
        return inertia('Dashboard', [
            'data' => [
                'total_pendapatan' => $total_pendapatan,
                'total_produk' => $product,
                'total_order' => $total_order,
                'transactions' => $transactions
            ]
        ]);
    }
}
