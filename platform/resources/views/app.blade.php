<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <meta name="description" content="All the latest Laravel News posts">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Laravel News Blog">
        <meta property="og:description" content="All the latest Laravel News posts">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Laravel News Blog">
        <meta property="og:image" content="https://picperf.io/https://laravel-news.com/images/laravelnews-og.png">
        <meta property="og:description" content="All the latest Laravel News posts">
        <meta property="og:url" content="https://laravel-news.com/blog">
        <meta property="og:site_name" content="Laravel News">
        <meta property="og:locale" content="fr_FR">

        <link rel="manifest" href="/site.webmanifest">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="bg-white dark:bg-dark-blue selection:bg-dark-blue/30 selection:dark:bg-marble/40 transition-colors">
        @inertia
    </body>
</html>