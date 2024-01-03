<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class AboutController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('AboutUs');
    }
}
