<?php

use App\Http\Controllers\EssayArticleController\DetailEssayArticle;
use App\Http\Controllers\EssayArticleController\IndexEssayArticle;
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

Route::prefix('essay')
    ->as('essay.')
    ->group(static function (): void {
        Route::get('/', IndexEssayArticle::class)->name('index');
        Route::get('/{slug}', DetailEssayArticle::class)->name('detail');
//        Route::post('/', StoreController::class)->name('store');
//        Route::get('/create', CreateController::class)->name('create');
    });

require __DIR__.'/guest.php';
require __DIR__.'/auth.php';
