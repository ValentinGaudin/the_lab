<?php

namespace App\Providers;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;
use LogicException;

class CanvasServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->booted(function () {
            $timeZone = config('app.timezone');

            if (! is_string($timeZone)) {
                throw new LogicException('Expected string for $timeZone');
            }

            $schedule = resolve(Schedule::class);
            $schedule
                ->command('canvas:digest')
                ->weekly()
                ->mondays()
                ->timezone($timeZone)
                ->at('08:00')
                ->when(function () {
                    return config('canvas.mail.enabled');
                });
        });
    }
}
