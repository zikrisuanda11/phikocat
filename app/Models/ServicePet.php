<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicePet extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function detailTransactions()
    {
        return $this->hasMany(DetailTransaction::class);
    }

    public function Carts()
    {
        return $this->hasMany(Cart::class, 'id_service');
    }
}
