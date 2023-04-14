<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cities_id')->index();
            $table->unsignedBigInteger('main_activity_ciiu')->index();
            $table->unsignedBigInteger('secondary_activity_ciiu')->index();
            
            $table->string('nit', 20)->nullable()->unique();
            $table->string('razon_social', 200)->nullable();
            $table->string('representante_legal', 100)->nullable();
            $table->string('email', 150)->nullable();
            $table->string('telefono1', 20)->nullable();
            $table->string('telefono2', 20)->nullable();
            $table->string('direccion', 250)->nullable();
            $table->smallInteger('vehiculos_propios')->nullable();
            $table->smallInteger('vehiculos_contratados')->nullable();
            $table->smallInteger('conductores_propios')->nullable();
            $table->smallInteger('conductores_contratados')->nullable();
            $table->string('nivel', 10)->nullable();

            $table->foreign('cities_id')->references('id')->on('cities')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('main_activity_ciiu')->references('id')->on('ciius')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('secondary_activity_ciiu')->references('id')->on('ciius')
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
        Schema::dropIfExists('companies');
    }
}
