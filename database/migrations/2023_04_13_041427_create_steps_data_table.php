<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepsDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steps_data', function (Blueprint $table) {
            $table->id();
            $table->json('payload')->nullable();
            $table->unsignedBigInteger('users_id')->index();
            $table->unsignedBigInteger('steps_id')->index();

            $table->foreign('users_id')->references('id')->on('users')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('steps_id')->references('id')->on('steps')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('steps_data');
    }
}