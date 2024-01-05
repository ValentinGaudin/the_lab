<?php

use App\Http\Controllers\Blog\BlogDetailArticle;
use App\Http\Controllers\Blog\BlogIndexController;
use App\Http\Controllers\Blog\IndexEssayPost;
use App\Http\Controllers\Blog\IndexExperiencePost;
use App\Http\Controllers\Blog\TagController;
use App\Http\Controllers\Blog\TopicController;
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
                Route::as('blog.')
                    ->group(static function (): void {
                        Route::get('/', BlogIndexController::class)->name('index');

                        Route::prefix('topic')
                            ->as('topic.')
                            ->group(static function (): void {
                                Route::get('/{topic:slug}', TopicController::class)->name('index');
                            });

                        Route::prefix('tag')
                            ->as('tag.')
                            ->group(static function (): void {
                                Route::get('/{tag:slug}', TagController::class)->name('index');
                            });

                        Route::get('/{post:slug}', BlogDetailArticle::class)->name('detail');
                    });
            });
    });

Route::prefix('internal')
    ->as('internal.')
    ->group(static function (): void {
        Route::get('posts/images/{file}', InternalStorageController::class)
            ->name('posts.images');
    });
