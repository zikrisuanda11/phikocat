<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductPetRequest extends FormRequest
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
            'name_product' => 'required',
            'description_product' => 'required',
            'price_product' => 'required',
            'stock_product' => 'required',
            'type_product_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name_product.required' => 'Nama produk wajib diisi.',
            'description_product.required' => 'Deskripsi produk wajib diisi.',
            'price_product.required' => 'Harga produk wajib diisi.',
            'stock_product.required' => 'Stok produk wajib diisi.',
            'type_product_id.required' => 'Tipe produk wajib diisi.',
        ];
    }
}
