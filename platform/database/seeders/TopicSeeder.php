<?php

namespace Database\Seeders;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if ((bool) Topic::query()->count() || ! User::first()) {
            return;
        }

        $toInsert = [
            [
                'id' => fake()->uuid,
                'user_id' => User::first()->getKey(),
                'slug' => Topic::ESSAY_ARTICLE,
                'name' => Topic::ESSAY_ARTICLE,
            ],
            [
                'id' => fake()->uuid,
                'user_id' => User::first()->getKey(),
                'slug' => Topic::EXPERIENCE_ARTICLE,
                'name' => Topic::EXPERIENCE_ARTICLE,
            ],
        ];

        Topic::query()->insert($toInsert);
    }
}
