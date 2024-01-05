<?php

namespace Database\Factories;

use App\Models\Topic;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Topic>
 */
class TopicFactory extends Factory
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
            'slug'    => Topic::ESSAY_ARTICLE,
            'name'    => Topic::ESSAY_ARTICLE,
        ]);
    }

    public function tagExperience(): static
    {
        return $this->state(fn(array $attributes) => [
            'id'      => fake()->uuid,
            'user_id' => 1,
            'slug'    => Topic::EXPERIENCE_ARTICLE,
            'name'    => Topic::EXPERIENCE_ARTICLE,
        ]);
    }
}
