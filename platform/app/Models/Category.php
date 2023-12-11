<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    const string ESSAY_ARTICLE = 'essay';
    const string ESSAY_EXPERIENCE = 'experience';

    const array CATEGORIES = [
        self::ESSAY_ARTICLE,
        self::ESSAY_EXPERIENCE
    ];

    protected $fillable = [
        'name',
    ];

    /**
     * @return BelongsToMany<Article>
     */
    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class);
    }
}
