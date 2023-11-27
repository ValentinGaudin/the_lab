<?php

use function Pest\Laravel\{get};

test('globals')
    ->expect(['dd', 'dump', 'var_dump', 'ddd'])
    ->not->toBeUsed();

it('returns a successful response', function () {
    get('/')->assertStatus(200);
});
