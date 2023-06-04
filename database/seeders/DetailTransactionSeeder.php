<?php

namespace Database\Seeders;

use App\Models\DetailTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DetailTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <= 25; $i++){
            DetailTransaction::factory()->create([
                'transaction_id' => $i
            ]);
        }
    }
}
