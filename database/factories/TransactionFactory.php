<?php

namespace Database\Factories;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->numberBetween(1, 3),
            'date_transaction' => fake()->date(),
            'amount' => fake()->numberBetween(10000, 100000),
            'type_transaction_id' => fake()->numberBetween(1,2),
            'type_payment' => collect([
                'transfer',
                'cod'
            ])->random(),
            'status_transaction' => collect([
                'failed',
                'pending',
                'success'
            ])->random(),
            'evidence_of_transfer' => fake()->creditCardNumber()
        ];
    }
}
