<?php

namespace App\Http\Controllers\Blog;

use App\Models\Tag;
use App\Queries\GetArticleByType;
use Inertia\Inertia;
use Inertia\Response;

class IndexExperienceArticle
{
    public function __invoke(GetArticleByType $articleByType): Response
    {
        return Inertia::render('Blog/Articles', [
            'title' => 'Expériences',
            'articles' => $articleByType(Tag::EXPERIENCE_ARTICLE),
        ]);
    }
}
