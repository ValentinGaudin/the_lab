<?php

namespace App\Queries\EssayArticleQuery;

use App\Models\Article;

class GetDetailEssayArticlesQuery
{
    public function __construct(
        private string $slug,
    ) {}

    public function get(): array
    {
        $post = Article::query()
            ->select(['title', 'content'])
            ->where('slug', $this->slug)
            ->findOrFail($this->postId);

        return $post->toArray();
    }
}