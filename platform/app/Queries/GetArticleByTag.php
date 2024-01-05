<?php

namespace App\Queries;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

final class GetArticleByTag
{
    /**
     * @return Collection<int, Post>
     */
    public function __invoke(string $tag): Collection
    {
        if (! in_array($tag, Tag::query()->pluck('slug')->toArray())) {
            throw new ModelNotFoundException('There are no article with this ' . $tag);
        }

        return Post::query()
            ->ofTag($tag)
            ->latest()
            ->get();
    }
}
