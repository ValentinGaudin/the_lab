<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

final class Tag extends \Canvas\Models\Tag
{
    use HasFactory;

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
