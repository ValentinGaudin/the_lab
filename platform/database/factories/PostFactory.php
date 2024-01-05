<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => fake()->uuid,
            'title' => fake()->sentence(),
            'slug' => fake()->slug,
            'summary' => fake()->paragraph(),
            'body' => '<p>'.fake()->paragraph(2).'</p><br><br><p>'.fake()->paragraph(8).'</p><br><br><p>'.fake()->paragraph(6).'</p>',
            'published_at' => Carbon::now()->addSeconds(10),
            'featured_image' => storage_path('/internal/articles/banner/default-banner.svg'),
            'user_id' => 1,
        ];
    }
}
