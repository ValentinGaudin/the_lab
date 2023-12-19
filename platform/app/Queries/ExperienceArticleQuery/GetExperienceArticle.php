<?php

namespace App\Queries\ExperienceArticleQuery;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Collection;

class GetExperienceArticle
{
    public function __invoke(): Collection
    {
        return Article::query()->ofCategory(Category::ESSAY_EXPERIENCE)->with('categories')->get();
    }
}