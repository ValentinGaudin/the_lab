<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\DraftPostScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;

final class Post extends \Canvas\Models\Post
{
    use HasFactory;

    public const string BANNER_STORAGE_PATH = 'posts/banner';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id',
        'slug',
        'title',
        'summary',
        'body',
        'published_at',
        'featured_image',
        'featured_image_caption',
        'user_id',
        'meta',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'meta' => 'array',
        'created_at' => 'datetime:d M Y',
        'published_at' => 'datetime:d M Y',
    ];

    /**
     * @var string[]
     */
    protected $appends = ['read_time', 'featured_banner'];

    /**
     * @var string[]
     */
    protected $with = ['tags', 'user'];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * The "booting" method of the model.
     */
    protected static function booted(): void
    {
        self::addGlobalScope(new DraftPostScope);
    }

    /**
     * @param Builder<Post> $builder
     */
    public function scopeOfTag(Builder $builder, string $tag): void
    {
        $builder->whereHas('tags', function (Builder $query) use ($tag) {
            $query->where('name', $tag);
        });
    }

    /**
     * @return Attribute<string, never>
     */
    public function featuredBanner(): Attribute
    {
        return Attribute::get(
            get: fn () => $this->featured_image ?? 'posts/banner/default-banner.svg'
        );
    }
}
