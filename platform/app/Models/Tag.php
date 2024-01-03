<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends \Canvas\Models\Tag
{
    use HasFactory;

    const string ESSAY_ARTICLE = 'essay';

    const string EXPERIENCE_ARTICLE = 'experience';

    /**
     * @return array<int, string>
     */
    const array CATEGORIES = [
        self::ESSAY_ARTICLE,
        self::EXPERIENCE_ARTICLE,
    ];

    protected $fillable = [
        'slug',
        'name',
        'user_id'
    ];
}
