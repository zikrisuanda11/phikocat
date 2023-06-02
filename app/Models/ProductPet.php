<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPet extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function typeProducts()
    {
        return $this->belongsTo(TypeProductPet::class, 'type_product_id');
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function detailTransaction()
    {
        return $this->hasOne(DetailTransaction::class);
    }
}
