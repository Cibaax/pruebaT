<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ciiu as CiiuModel;
use App\Models\departments;
use App\Models\cities;
use App\Models\drivers;

class HelperController extends Controller
{
    public function ciiu()
    {
        return CiiuModel::all()->map(function ($_ciuu) {
            return ["value" => $_ciuu->id, "label" => "$_ciuu->codigo - $_ciuu->actividad"];
        });
    }

    public function drivers()
    {
        return drivers::all()->map(function ($_drivers) {
            return ["value" => $_drivers->nombre_completo, "label" => $_drivers->numero_identificacion,"label1" => $_drivers->empresa_usuaria, "fecha_nacimiento" => $_drivers->fecha_nacimiento, "genero" => $_drivers->genero, "edad" => $_drivers->edad];
        });
    }

    public function departamentos()
    {
        return departments::all()->map(function ($departamento) {
            return ["value" => $departamento->id, "label" => $departamento->nombre];
        });
    }

    public function ciudades(string $departamento_id)
    {
        return cities::where('departments_id', $departamento_id)->get()->map(function ($ciudad) {
            return ["value" => $ciudad->id, "label" => $ciudad->nombre];
        });
    }

    public function ciudades_all()
    {
        return cities::all()->map(function ($ciudad) {
            return ["value" => $ciudad->id, "label" => $ciudad->nombre];
        });
    }
}