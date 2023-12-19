<?php

namespace App\Http\Controllers\ExperienceArticleController;

use App\Queries\ExperienceArticleQuery\GetDetailExperienceArticles;
use Inertia\Inertia;

class DetailExperienceArticle
{
    public function __invoke(string $slug)
    {
        $essayArticle = new GetDetailExperienceArticles();

        dd($essayArticle($slug));

        return Inertia::render('Blog/ExperienceCard', [
            'essay' => $essayArticle
        ]);
    }
}