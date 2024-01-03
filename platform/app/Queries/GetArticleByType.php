<?php

namespace App\Queries;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

final class GetArticleByType
{
    /**
     * @return Collection<int, Post>
     */
    public function __invoke(string $type): Collection
    {
        if (! in_array($type, Tag::CATEGORIES)) {
            throw new ModelNotFoundException('There are no article with this '.$type);
        }

        return Post::query()
            ->ofCategory($type)
            ->latest()
            ->get();
    }
}
