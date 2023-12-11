<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::factory()
            ->has(Category::factory(1)->categoryEssay())
            ->count(1)
            ->create()
        ;

        Article::factory()
            ->has(Category::factory(1)->categoryExperience())
            ->count(1)
            ->create()
        ;
    }
}
