<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Queries\GetArticleByTag;
use App\Queries\GetArticleByTopic;
use Inertia\Inertia;
use Inertia\Response;

final class TopicController extends Controller
{
    public function __invoke(GetArticleByTopic $articleByTopic, string $locale, string $topic): Response
    {
        return Inertia::render('Blog/Articles', [
            'title'    => $topic,
            'articles' => $articleByTopic($topic),
        ]);
    }
}