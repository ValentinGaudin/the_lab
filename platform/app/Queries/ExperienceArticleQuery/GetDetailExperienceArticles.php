<?php

namespace App\Queries\ExperienceArticleQuery;

use App\Models\Article;

class GetDetailExperienceArticles
{
    public function __invoke(string $slug): array
    {
        $post = Article::query()
            ->select(['title', 'content'])
            ->where('slug', $slug)
            ->firstOrFail();

        return $post->toArray();
    }
}