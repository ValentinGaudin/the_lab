<?php

use function Pest\Laravel\get;

describe('get posts with tag', function () {
    it('essay tag', function () {
        $response = get('/fr/blog/essay');

        $response->assertStatus(200);
    });

    it('experience tag', function () {
        $response = get('/fr/blog/experience');

        $response->assertStatus(200);
    });
});
