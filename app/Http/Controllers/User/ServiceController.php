<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\DetailTransaction;
use App\Models\ServicePet;
use App\Models\Transaction;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = ServicePet::orderBy('id', 'ASC')->get();
        return inertia('Customer/Service/index', [
            'services' => $services
        ]);
    }

    public function grooming()
    {
        $total_price = ServicePet::select('price_service')->where('type_service', 'grooming')->first();
        return inertia('Customer/Service/Grooming/grooming', [
            'total_price' => $total_price->price_service
        ]);
    }

    public function groomingStatus($id_transaction)
    {
        $transaction = Transaction::where('id', $id_transaction)->first();
        $detailTransaction = DetailTransaction::where('transaction_id', $transaction->id);
        return inertia('Customer/Service/Grooming/status', [
            'transaction' => $transaction,
            'detailTransaction' => $detailTransaction
        ]);
    }

    public function petHotel()
    {
        return inertia('Customer/Service/PetHotel/petHotel');
    }
}

