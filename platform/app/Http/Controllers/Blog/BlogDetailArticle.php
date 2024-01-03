<?php

namespace App\Http\Controllers\Blog;

use App\Queries\GetDetailArticle;
use Canvas\Events\PostViewed;
use Event;
use Inertia\Inertia;
use Inertia\Response;

class BlogDetailArticle
{
    public function __invoke(GetDetailArticle $getDetailArticle, string $locale, string $slug): Response
    {
        Event::dispatch(new PostViewed($getDetailArticle($slug)));

        return Inertia::render('Blog/ArticleCard', [
            'article' => $getDetailArticle($slug),
        ]);
    }
}
