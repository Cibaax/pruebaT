<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drivers', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_completo', 250)->nullable();
            $table->string('numero_identificacion', 20)->nullable();
            $table->string('ciudad_expedicion', 30)->nullable();
            $table->string('fecha_nacimiento', 20)->nullable();
            $table->string('genero', 20)->nullable();
            $table->string('edad', 20)->nullable();
            $table->string('experiencia_especifica', 200)->nullable();
            $table->string('empresa_usuaria', 200)->nullable();
            $table->string('cargo', 20)->nullable();
            $table->string('escolaridad', 20)->nullable();
            $table->string('tipo_contrato', 20)->nullable();
            $table->string('zona_desplazamiento', 200)->nullable();
            $table->string('inscripcion_runt', 200)->nullable();
            $table->string('numero_inscripcion', 20)->nullable();
            $table->string('fecha_ingreso_empresa', 20)->nullable();
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
        Schema::dropIfExists('drivers');
    }
}
