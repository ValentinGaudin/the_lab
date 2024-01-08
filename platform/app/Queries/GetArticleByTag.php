<?php

namespace App\Queries;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

final class GetArticleByTag
{
    /**
     * @return Collection<int, Post>
     */
    public function __invoke(string $tag): Collection
    {
        if (!in_array($tag, Tag::query()->pluck('slug')->toArray())) {
            throw new ModelNotFoundException('There are no article with this ' . $tag);
        }

        $toto = Post::query()->create([
            'id'             => fake()->uuid,
            'title'          => fake()->sentence(),
            'slug'           => fake()->slug,
            'summary'        => fake()->paragraph(),
            'body'           => '<p>' . fake()->paragraph(2) . '</p><br><br><p>' . fake()->paragraph(8) . '</p><br><br><p>' . fake()->paragraph(6) . '</p>',
            'published_at'   => Carbon::now()->addSeconds(10),
            'featured_image' => storage_path('/internal/articles/banner/default-banner.svg'),
            'user_id'        => 1,
        ])->toSql();

        dump($toto);

        return Post::query()
            ->ofTag($tag)
            ->latest()
            ->get();
    }
}
