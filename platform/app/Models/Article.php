<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Illuminate\Support\Number;

class Article extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'content',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime:d F Y',
    ];


    protected $appends = ['reading_time'];

    /**
     * @var string[]
     */
    protected $with = ['categories', 'files'];


    public function scopeOfCategory(Builder $builder, string $type): void
    {
        $builder->whereHas('categories', function (Builder $query) use ($type) {
            $query->where('name', $type);
        })->get();
    }

    /**
     * @return BelongsToMany<File>
     */
    public function files(): BelongsToMany
    {
        return $this->belongsToMany(File::class);
    }

    /**
     * @return BelongsToMany<Category>
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function readingTime(): Attribute
    {
        $readingTime = Str::wordCount(strip_tags($this->content)) / 240;

        return Attribute::make(
            get: fn () => round(Number::format($readingTime))
        );
    }
}
