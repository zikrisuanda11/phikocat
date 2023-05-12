<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TypeTransactionRequest extends FormRequest
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
            'type_transaction_name' => 'required'
        ];
    }

    public function message(): array
    {
        return [
            'type_transaction_name.required' => 'Nama Type Transaksi wajib diisi.'
        ];
    }
}
