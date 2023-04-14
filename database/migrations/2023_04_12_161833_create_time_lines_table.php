<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_lines', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_referencia');
            $table->dateTime('fecha_finalizacion')->nullable();
            $table->unsignedTinyInteger('estado')->nullable();
            $table->string('info_boton', 100)->nullable();
            $table->unsignedBigInteger('users_id')->index();
            $table->unsignedBigInteger('steps_id')->index();

            $table->foreign('users_id')->references('id')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');

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
        Schema::dropIfExists('time_lines');
    }
}
