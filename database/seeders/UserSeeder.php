<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name'      => 'admin',
            'email'     => 'admin@test.com',
            'is_active' => true,
            'password'  => Hash::make('password')
        ]);
        $manager = User::create([
            'name'      => 'manager',
            'email'     => 'manager@test.com',
            'is_active' => true,
            'password'  => Hash::make('password')
        ]);
        $customer = User::create([
            'name'      => 'customer',
            'email'     => 'customer@test.com',
            'is_active' => true,
            'password'  => Hash::make('password')
        ]);

        $admin->assignRole('admin');
        $manager->assignRole('manager');
        $customer->assignRole('customer');
    }
}
