<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Tag;
use App\Models\Topic;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()
            ->has(Topic::factory(1)->tagEssay())
            ->count(1)
            ->create();

        Post::factory()
            ->has(Topic::factory(1)->tagExperience())
            ->count(1)
            ->create();
    }
}
