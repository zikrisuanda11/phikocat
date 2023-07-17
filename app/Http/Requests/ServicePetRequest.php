<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServicePetRequest extends FormRequest
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
            'name_service' => 'required',
            'price_service' => 'required',
            'type_service' => 'required',
            'description_service' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name_service.required' => 'Nama layanan wajib diisi.',
            'price_service.required' => 'Harga layanan wajib diisi.',
            'type_service.required' => 'Tipe layanan wajib diisi.',
            'description_service.required' => 'Deskripsi layanan wajib diisi.',
        ];
    }
}
