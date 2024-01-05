<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Carbon;

/**
 * @property string $email
 * @property ?Carbon $email_verified_at
 */
final class User extends Userable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'summary',
        'avatar',
        'dark_mode',
        'digest',
        'locale',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'digest' => 'boolean',
        'dark_mode' => 'boolean',
        'role' => 'int',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'default_avatar',
        'default_locale',
    ];

    /**
     * @return HasMany<Post>
     */
    public function articles(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * @return MorphTo<Model, User>
     */
    public function userable(): MorphTo
    {
        return $this
            ->morphTo();
    }
}
