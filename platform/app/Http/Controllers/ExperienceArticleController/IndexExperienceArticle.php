<?php

namespace App\Http\Controllers\ExperienceArticleController;

use App\Queries\ExperienceArticleQuery\GetExperienceArticle;
use Inertia\Inertia;
use Inertia\Response;

class IndexExperienceArticle
{
    public function __invoke(GetExperienceArticle $experienceArticle): Response
    {
        return Inertia::render('Blog/Experience', [
            'articles' => $experienceArticle()
        ]);
    }
}