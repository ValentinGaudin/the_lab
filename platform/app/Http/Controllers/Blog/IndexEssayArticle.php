<?php

namespace App\Http\Controllers\Blog;

use App\Models\Tag;
use App\Queries\GetArticleByType;
use Inertia\Inertia;
use Inertia\Response;

class IndexEssayArticle
{
    public function __invoke(GetArticleByType $articleByType, string $locale): Response
    {
        dd('stop');
        return Inertia::render('Blog/Articles', [
            'title'    => 'Essais',
            'articles' => $articleByType(Tag::ESSAY_ARTICLE),
        ]);
    }
}
