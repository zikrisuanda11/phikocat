<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DetailTransaction>
 */
class DetailTransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => fake()->numberBetween(1, 25),
            'service_id' => fake()->numberBetween(1, 25),
            'quantity' => fake()->numberBetween(1, 10),
            'date_service' => fake()->date(),
            'date_checkin' => fake()->date(),
            'date_out' => fake()->date(),
            'amount' => fake()->numberBetween(10000, 100000)
        ];
    }


}
