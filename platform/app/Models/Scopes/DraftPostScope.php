<?php

namespace App\Models\Scopes;

use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class DraftPostScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  Builder<Post> $builder
     */
    public function apply(Builder $builder, Model $model): void
    {
        $builder
            ->whereNotNull('published_at')
            ->orWhere('published_at', '>', now()->toDateTimeString())
        ;
    }
}
