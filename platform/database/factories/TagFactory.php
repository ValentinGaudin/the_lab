<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
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

    public function tagEssay(): static
    {
        return $this->state(fn(array $attributes) => [
            'id'      => fake()->uuid,
            'user_id' => 1,
            'slug'    => Tag::ESSAY_ARTICLE,
            'name'    => Tag::ESSAY_ARTICLE,
        ]);
    }

    public function tagExperience(): static
    {
        return $this->state(fn(array $attributes) => [
            'id'      => fake()->uuid,
            'user_id' => 1,
            'slug'    => Tag::EXPERIENCE_ARTICLE,
            'name'    => Tag::EXPERIENCE_ARTICLE,
        ]);
    }
}
