<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductPet>
 */
class ProductPetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name_product' => fake()->name(),
            'description_product' => fake()->word(),
            'price_product' => fake()->numberBetween(10000, 100000),
            'stock_product' => fake()->numberBetween(100, 1000),
            'type_product_id' => fake()->numberBetween(1, 25)
        ];
    }
}
