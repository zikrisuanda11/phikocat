<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function productPets()
    {
        return $this->belongsTo(ProductPet::class, 'product_id');
    }

    public function servicePet()
    {
        return $this->belongsTo(ServicePet::class, 'service_id');
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
