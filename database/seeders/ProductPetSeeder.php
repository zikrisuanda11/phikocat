<?php

namespace Database\Seeders;

use App\Models\ProductPet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductPetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductPet::factory()->count(25)->create();
    }
}
