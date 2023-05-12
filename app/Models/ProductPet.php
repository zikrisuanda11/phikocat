<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPet extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function typeProduct()
    {
        return $this->belongsTo(TypeProductPet::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
