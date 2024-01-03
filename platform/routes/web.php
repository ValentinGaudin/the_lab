<?php

use App\Http\Controllers\Blog\BlogDetailArticle;
use App\Http\Controllers\Blog\BlogIndexController;
use App\Http\Controllers\Blog\IndexEssayArticle;
use App\Http\Controllers\Blog\IndexExperienceArticle;
use App\Http\Controllers\InternalStorageController;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $inspire = Inspiring::quote();

    return Inertia::render('Welcome', [
        'inspiringQuote' => $inspire,
    ]);
})->name('welcome');

Route::prefix('{locale}')
    ->group(static function (): void {
        Route::get('/', BlogIndexController::class)->name('index');

        Route::prefix('blog')
            ->group(static function (): void {
                Route::prefix('')
                    ->as('blog.')
                    ->group(static function (): void {
                        Route::get('/', BlogIndexController::class)->name('index');
                        Route::get('/{post:slug}', BlogDetailArticle::class)->name('detail');

                        Route::prefix('essay')
                            ->as('essay.')
                            ->group(static function (): void {
                                Route::get('/', IndexEssayArticle::class)->name('index');
                            });

                        Route::prefix('experience')
                            ->as('experience.')
                            ->group(static function (): void {
                                Route::get('/', IndexExperienceArticle::class)->name('index');
                            });
                    });
            });
    });

Route::prefix('internal')
    ->as('internal.')
    ->group(static function (): void {
        Route::get('posts/banner/{file}', InternalStorageController::class)
            ->name('articles.banner');
    });
