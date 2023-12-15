<?php

namespace App\Http\Controllers\EssayArticleController;

use App\Queries\EssayArticleQuery\GetDetailEssayArticles;
use Inertia\Inertia;

class DetailEssayArticle
{
    public function __invoke(string $slug)
    {
        $essayArticle = new GetDetailEssayArticles();

        dd($essayArticle($slug));

        return Inertia::render('Essay/Essays', [
            'essay' => $essayArticle
        ]);
    }
}