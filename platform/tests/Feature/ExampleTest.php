<?php

namespace Tests\Feature;

it('has a welcome page', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
