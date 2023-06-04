<?php

namespace Database\Seeders;

use App\Models\ServicePet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServicePetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ServicePet::factory()->count(25)->create();
    }
}
