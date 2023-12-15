<?php

namespace App\Queries\EssayArticleQuery;

use App\Models\Article;

class GetDetailEssayArticles
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