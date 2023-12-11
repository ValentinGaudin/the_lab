<?php

namespace App\Http\Controllers\EssayArticleController;

use App\Queries\EssayArticleQuery\GetEssayArticle;
use Inertia\Inertia;
use Inertia\Response;

class IndexEssayArticle
{
    public function __invoke(GetEssayArticle $essayArticle): Response
    {
        return Inertia::render('Essay', [
            'essayArticle' => $essayArticle()
        ]);
    }
}