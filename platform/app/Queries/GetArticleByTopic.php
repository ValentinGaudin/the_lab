<?php

namespace App\Queries;

use App\Models\Post;
use App\Models\Topic;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

final class GetArticleByTopic
{
    /**
     * @return Collection<int, Post>
     */
    public function __invoke(string $topic): Collection
    {
        if (!in_array($topic, Topic::query()->pluck('slug')->toArray())) {
            throw new ModelNotFoundException('There are no article with this ' . $topic);
        }

        return Post::query()
            ->ofTopic($topic)
            ->latest()
            ->get();
    }
}
