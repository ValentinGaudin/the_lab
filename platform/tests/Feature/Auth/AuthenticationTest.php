<?php

use App\Models\User;

use function Pest\Laravel\assertCredentials;
use function Pest\Laravel\get;
use function Pest\Laravel\isAuthenticated;

test('login screen can be rendered', function () {
    $response = get('/canvas/login');

    $response->assertStatus(200);
});

test('users can authenticate with correct credentials', function () {
    $user = User::factory()->create();

    assertCredentials([
        'email' => $user->email,
        'password' => 'password',
    ]);

    isAuthenticated();
});
