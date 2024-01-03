<?php

namespace App\Queries;

use App\Models\Post;
use Illuminate\Support\Collection;

final class GetArticles
{
    /**
     * @return Collection<int, Post>
     */
    public function __invoke(): Collection
    {
        return Post::query()
            ->latest('published_at')
            ->get();
    }
}
