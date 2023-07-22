<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use App\Models\ServicePet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\DetailTransaction;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        $services = ServicePet::orderBy('id', 'ASC')->get();
        return inertia('Customer/Service/index', [
            'services' => $services
        ]);
    }

    public function grooming($id)
    {
        $service = ServicePet::where('id', $id)->first();
        $total_price = ServicePet::select('price_service')->where('id', $id)->first();
        return inertia('Customer/Service/Grooming/grooming', [
            'total_price' => $total_price->price_service,
            'service' => $service
        ]);
    }

    public function groomingStatus($id_transaction)
    {
        $transaction = Transaction::where('id', $id_transaction)->first();
        $detailTransaction = DetailTransaction::where('transaction_id', $id_transaction)->first();
        return inertia('Customer/Service/Grooming/status', [
            'transaction' => $transaction,
            'detailTransaction' => $detailTransaction
        ]);
    }

    public function petHotel()
    {
        return inertia('Customer/Service/PetHotel/petHotel');
    }

    public function petHoteUpdate(Request $request)
    {
        $dateCheckin = Carbon::parse($request->date_checkin);
        $dateCheckout = Carbon::parse($request->date_checkout);
        $quantity = $dateCheckout->diffInDays($dateCheckin);

        $service = ServicePet::where('type_service', 'pet_hotel')->first();

        $total = $quantity > 0 ? $quantity * $service->price_service : 0;

        session()->flash('data', $total);
    }

    public function petHotelStatus($id_transaction)
    {
        $transaction = Transaction::where('id', $id_transaction)->first();
        $detailTransaction = DetailTransaction::where('transaction_id', $transaction->id)->first();
        return inertia('Customer/Service/PetHotel/status', [
            'transaction' => $transaction,
            'detailTransaction' => $detailTransaction
        ]);
    }
}

