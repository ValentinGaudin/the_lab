<?php

declare(strict_types=1);

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\Queries\GetArticleByTag;
use Inertia\Inertia;
use Inertia\Response;

final class TagController extends Controller
{
    public function __invoke(GetArticleByTag $articleByTag, string $locale, string $tag): Response
    {
        return Inertia::render('Blog/Articles', [
            'title'    => $tag,
            'articles' => $articleByTag($tag),
        ]);
    }
}