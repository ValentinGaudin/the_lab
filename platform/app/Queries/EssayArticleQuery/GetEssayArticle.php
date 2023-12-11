<?php

namespace App\Queries\EssayArticleQuery;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Collection;

class GetEssayArticle
{
    public function __invoke(): Collection
    {
        return Article::query()->ofCategory(Category::ESSAY_ARTICLE)->get();
    }
}