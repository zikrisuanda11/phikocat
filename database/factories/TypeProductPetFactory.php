<?php

namespace Database\Factories;

use App\Models\TypeProductPet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TypeProductPet>
 */
class TypeProductPetFactory extends Factory
{
    protected $model = TypeProductPet::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name_type' => fake()->name()
        ];
    }
}
