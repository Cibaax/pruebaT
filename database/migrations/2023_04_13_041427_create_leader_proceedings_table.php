<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeaderProceedingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leader_proceedings', function (Blueprint $table) {
            $table->id();
            $table->string('ciudad', 100);
            $table->date('fecha_acta');
            $table->string('destinatario', 100);
            $table->string('cargo', 200);
            $table->text('cuerpo_acta');
            $table->unsignedBigInteger('users_id')->index();

            $table->foreign('users_id')->references('id')->on('users')
                ->onDelete('no action')
                ->onUpdate('no action');

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
        Schema::dropIfExists('leader_proceedings');
    }
}
