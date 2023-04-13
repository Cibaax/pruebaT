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
            $table->string('razon_social', 200)->nullable();
            $table->string('representante', 200)->nullable();
            $table->string('nit', 20)->nullable();
            $table->string('email', 150)->nullable();
            $table->string('telefono1', 20)->nullable();
            $table->string('telefono2', 20)->nullable();
            $table->string('direccion', 250)->nullable();
            $table->string('nivel', 20)->nullable();
            $table->unsignedBigInteger('cities_id');
            $table->unsignedBigInteger('main_activity_ciiu');
            $table->unsignedBigInteger('secondary_activity_ciiu');
            $table->smallInteger('vehiculos_propios')->nullable();
            $table->smallInteger('vehiculos_contratados')->nullable();
            $table->smallInteger('conductores_propios')->nullable();
            $table->smallInteger('conductores_contratados')->nullable();

            $table->unique(["nit"], 'nit_UNIQUE');

            $table->index(["cities_id"], 'fk_companies_cities1_idx');

            $table->index(["main_activity_ciiu"], 'fk_companies_ciius1_idx');

            $table->index(["secondary_activity_ciiu"], 'fk_companies_ciius2_idx');


            $table->foreign('cities_id', 'fk_companies_cities1_idx')
                ->references('id')->on('cities')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('main_activity_ciiu', 'fk_companies_ciius1_idx')
                ->references('id')->on('ciius')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('secondary_activity_ciiu', 'fk_companies_ciius2_idx')
                ->references('id')->on('ciius')
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
