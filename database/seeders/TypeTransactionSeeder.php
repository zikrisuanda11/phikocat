<?php

namespace Database\Seeders;

use App\Models\TypeTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypeTransaction::create([
            'type_transaction_name' => 'products'
        ]);
        TypeTransaction::create([
            'type_transaction_name' => 'service'
        ]);
    }
}
