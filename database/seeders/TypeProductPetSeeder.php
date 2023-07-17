<?php

namespace Database\Seeders;

use App\Models\TypeProductPet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeProductPetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypeProductPet::factory()->count(25)->create();
    }
}
