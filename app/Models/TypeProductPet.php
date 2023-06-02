<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeProductPet extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function productPets()
    {
        return $this->hasMany(ProductPet::class, 'type_product_id');
    }
}
