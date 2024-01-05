<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('canvas_users', function (Blueprint $table) {
            $table->unsignedInteger('userable_id')->nullable()->after('role');
            $table->string('userable_type')->nullable()->after('userable_id');
            $table->index(['userable_id', 'userable_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('canvas_users', function (Blueprint $table) {
            $table->dropMorphs('userable');
        });
    }
};
