<?php

namespace App\Queries;

use App\Models\Post;

final class GetDetailArticle
{
    public function __invoke(string $slug): Post
    {
        return Post::query()
            ->where('slug', $slug)
            ->firstOrFail();
    }
}
