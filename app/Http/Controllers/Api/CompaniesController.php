<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\companies;
use Illuminate\Http\Request;
use Auth;

class CompaniesController extends Controller
{
    function show(Request $request)
    {
        $compania = Auth::user()->compania;
        if (!$compania)
            return false;

        $fecha = $compania->created_at;
        $compania->label_fecha = $fecha->format('d F Y');
        $compania->fecha = $fecha->format('d/m/Y');
        $compania->hora = $fecha->format('H:i');
        $compania->nivel = 'Avanzado';

        return $compania;
    }

    function create(Request $request)
    {
        $compania = new companies();
        $compania->razon_social = $request->nombreEmpresa;
        $compania->representante_legal = $request->representante ?? null;
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
        $compania->Save();

        $user = Auth::user();
        $user->companies_id = $compania->id;
        $user->save();
    }
}