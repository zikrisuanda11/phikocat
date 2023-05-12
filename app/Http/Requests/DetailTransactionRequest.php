<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DetailTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'transaction_id' => 'required',
            'product_id' => 'required',
            'service_id' => 'required',
            'quantity' => 'required',
            'date_service' => 'required',
            'date_checkin' => 'required',
            'date_out' => 'required',
            'amount' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'transaction_id.required' => 'ID Transaksi wajib diisi.',
            'product_id.required' => 'ID Produk wajib diisi.',
            'service_id.required' => 'ID Layanan wajib diisi.',
            'quantity.required' => 'Jumlah wajib diisi.',
            'date_service.required' => 'Tanggal Layanan wajib diisi.',
            'date_checkin.required' => 'Tanggal Check-in wajib diisi.',
            'date_out.required' => 'Tanggal Keluar wajib diisi.',
            'amount.required' => 'Jumlah wajib diisi.',
        ];
    }
}
