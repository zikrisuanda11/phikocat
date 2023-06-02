<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function detailTransactions()
    {
        return $this->hasOne(DetailTransaction::class);
    }

    public function typeTransaction()
    {
        return $this->belongsTo(TypeTransaction::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
