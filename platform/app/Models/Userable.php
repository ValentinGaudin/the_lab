<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

abstract class Userable extends \Canvas\Models\User implements MustVerifyEmail
{
    use HasFactory;
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * @return MorphOne<User>
     */
    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'userable');
    }
}
