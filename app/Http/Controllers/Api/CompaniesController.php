<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class CompaniesController extends Controller
{
    function show(Request $request) {
        $compania = Auth::user()->companias->first();
        if (!$compania)  return false;

        $fecha = $compania->created_at;
        $compania->label_fecha = $fecha->format('d F Y');
        $compania->fecha = $fecha->format('d/m/Y');
        $compania->hora = $fecha->format('H:i');
        $compania->nivel = 'Avanzado';
        
        return $compania;
    }
    
    function create(Request $request) {
        $arrcompania = [
            "razon_social" => $request->nombreEmpresa,
            "representante_legal" => $request->representante ?? null,
            "nit" => $request->nit,
            "telefono1" => $request->telefono1,
            "telefono2" => $request->telefono2 ?? null,
            "direccion" => $request->direccion,
            "cities_id" => $request->ciudad,
            "main_activity_ciiu" => $request->actividadP,
            "secondary_activity_ciiu" => $request->actividadS ?? null,
            "vehiculos_propios" => $request->vehiculosPropios,
            "vehiculos_contratados" => $request->vehiculosContratados,
            "conductores_propios" => $request->conductoresPropios,
            "conductores_contratados" => $request->conductoresContratados
        ];

        Auth::user()->companias()->updateOrCreate($arrcompania, $arrcompania);
    }
}

