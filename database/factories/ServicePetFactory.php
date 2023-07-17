<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ServicePet>
 */
class ServicePetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type_service = collect([
            'grooming',
            'pet_hotel'
        ]);

        return [
            'name_service' => fake()->title(),
            'price_service' => fake()->numberBetween(10000, 20000),
            'type_service' => $type_service->random(),
            'description_service' => fake()->text()
        ];
    }
}
