<?php

namespace App\Queries;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\ModelNotFoundException;

final class GetDetailArticle
{
    public function __invoke(string $slug): Post
    {
        return Post::query()
            ->where('slug', $slug)
            ->firstOrFail()
            ;
    }
}
