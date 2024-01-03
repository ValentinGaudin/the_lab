<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Queries\GetArticles;
use Inertia\Inertia;
use Inertia\Response;

final class BlogIndexController extends Controller
{
    public function __invoke(GetArticles $articles): Response
    {
        return Inertia::render('Blog/Articles', [
            'title' => 'Blog',
            'articles' => $articles(),
        ]);
    }
}
