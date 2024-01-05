<?php

test('globals')
    ->expect(['dd', 'dump', 'var_dump', 'ddd'])
    ->not
    ->toBeUsed();
