<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'date_transaction' => 'required',
            'amount' => 'required',
            'type_transaction_id' => 'required',
            'type_payment' => 'required',
            'status_transaction' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'date_transaction.required' => 'Tanggal transaksi wajib diisi.',
            'amount.required' => 'Jumlah wajib diisi.',
            'type_transaction_id.required' => 'Tipe transaksi wajib diisi.',
            'type_payment.required' => 'Tipe pembayaran wajib diisi.',
            'status_transaction.required' => 'Status transaksi wajib diisi.',
        ];
    }
}
