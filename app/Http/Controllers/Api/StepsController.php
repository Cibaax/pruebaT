<?php

namespace App\Http\Controllers\Api;

use App\Models\time_lines;
use App\Models\steps as StepModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Auth;

class StepsController extends Controller
{
    function getActualStep(Request $request) {
        $compania = Auth::user()->companias->first();
        if (!$compania)  return false;

        $steps = $compania->steps;
        if ($compania->steps->count() === 0) {
            time_lines::create([
                'fecha_referencia' => Carbon::now(),
                'estado' => 1,
                'steps_id' => StepModel::first()->id,
                'users_id' => Auth::id(),
                'companies_id' => $compania->id
            ]);
        }
        
        $time_lines = time_lines::where('companies_id', $compania->id)->orderByDesc('id')->get();
        return $time_lines->map(function($time_line) {
            $time_line->fecha_finalizacion = $time_line->fecha_finalizacion ? Carbon::parse($time_line->fecha_finalizacion)->format('d/m/Y') : null;
            $time_line->step = StepModel::find($time_line->steps_id) ?? null;
            return $time_line;
        });
    }
}
