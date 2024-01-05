<?php

use App\Models\Post;

use function Pest\Laravel\get;
use function PHPUnit\Framework\assertNotEmpty;

describe('test blog page', function () {
    it('get page', function () {
        $response = get('/fr/blog');

        $response->assertStatus(200);
    });

    it('get data for page', function () {
        Post::factory()->create();

        $response = get('/fr/blog');

        $articles = $response->getOriginalContent()->getData()['page']['props']['articles'];

        assertNotEmpty($articles);
    });
});
