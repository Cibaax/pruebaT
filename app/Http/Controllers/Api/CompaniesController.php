<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\companies;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    function crear(Request $request) {
        $compania = new companies();
        $compania->razon_social = $request->nombreEmpresa;
        $compania->representante = $request->representante ?? null;
        $compania->nit = $request->nit;
        $compania->telefono1 = $request->telefono1;
        $compania->telefono2 = $request->telefono2 ?? null;
        $compania->direccion = $request->direccion;
        $compania->cities_id = $request->ciudad;
        $compania->main_activity_ciiu = $request->actividadP;
        $compania->secondary_activity_ciiu = $request->actividadS ?? null;
        $compania->vehiculos_propios = $request->vehiculosPropios;
        $compania->vehiculos_contratados = $request->vehiculosContratados;
        $compania->conductores_propios = $request->conductoresPropios;
        $compania->conductores_contratados = $request->conductoresContratados;
        $compania->save();
    }
}

