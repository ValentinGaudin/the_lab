<?php

use App\Models\Article;
use App\Models\File;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->longText('content');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('article_file', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->foreignIdFor(Article::class)->constrained();
            $blueprint->foreignIdFor(File::class)->constrained();
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('article_file');
        Schema::dropIfExists('articles');
    }
};
