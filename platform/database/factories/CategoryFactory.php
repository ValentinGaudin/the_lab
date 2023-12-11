<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }

    public function categoryEssay(): static
    {
        return $this->state(fn (array $attributes) => [
            'name' => Category::ESSAY_ARTICLE
        ]);
    }

    public function categoryExperience(): static
    {
        return $this->state(fn (array $attributes) => [
            'name' => Category::ESSAY_EXPERIENCE
        ]);
    }
}
