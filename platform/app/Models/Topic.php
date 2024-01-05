<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends \Canvas\Models\Topic
{
    use HasFactory;

    const string ESSAY_ARTICLE = 'essay';

    const string EXPERIENCE_ARTICLE = 'experience';

    /**
     * @var array<int, string>
     */
    const array TOPICS = [
        self::ESSAY_ARTICLE,
        self::EXPERIENCE_ARTICLE,
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected $fillable = [
        'slug',
        'name',
        'user_id',
    ];
}
