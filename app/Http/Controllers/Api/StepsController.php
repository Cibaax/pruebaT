<?php

namespace App\Http\Controllers\Api;

use App\Models\leader_proceedings;
use App\Models\time_lines;
use App\Models\steps as StepModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Auth;

class StepsController extends Controller
{
    function getActualStep(Request $request)
    {
        $compania = Auth::user()->compania;
        if (!$compania)
            return false;

        $time_lines = Auth::user()->time_lines;
        if ($time_lines->count() === 0) {
            time_lines::create([
                'fecha_referencia' => Carbon::now(),
                'estado' => 1,
                'steps_id' => StepModel::first()->id,
                'users_id' => Auth::id(),
            ]);

            $time_lines = Auth::user()->time_lines->sortByDesc('id');
        } else {
            foreach ($time_lines->sortByDesc('steps_id') as $time_lines) {
                $nextNumber = $time_lines->step->numero + 1;
                $next_step = time_lines::whereHas('step', function ($query) use ($nextNumber) {
                    return $query->where('numero', $nextNumber);
                })
                    ->where('users_id', Auth::id())
                    ->first();
                if ($time_lines->estado === 3 && !$next_step) {
                    time_lines::create([
                        'fecha_referencia' => Carbon::now(),
                        'estado' => 1,
                        'steps_id' => StepModel::where('numero', $nextNumber)->first()->id,
                        'users_id' => Auth::id(),
                    ]);
                }
            }
            $time_lines = Auth::user()->time_lines->sortBy('id');
        }

        $time_lines_ar = [];
        foreach ($time_lines as $time_line) {
            $time_line['fecha'] = $time_line->fecha_finalizacion ? Carbon::parse($time_line->fecha_finalizacion)->format('d/m/Y') : null;
            $time_line['hora'] = $time_line->fecha_finalizacion ? Carbon::parse($time_line->fecha_finalizacion)->format('H:i') : null;
            $time_line['step'] = $time_line->step;
            $time_lines_ar[] = $time_line;
        }

        return $time_lines_ar;
    }

    function saveStep(request $request, $step_id)
    {
        $leader_proceedings = new leader_proceedings();
        $leader_proceedings->ciudad = $request->ciudad;
        $leader_proceedings->fecha_acta = $request->fecha;
        $leader_proceedings->destinatario = $request->destinatario;
        $leader_proceedings->cargo = $request->cargo;
        $leader_proceedings->cuerpo_acta = $request->cuerpo_acta;
        $leader_proceedings->users_id = Auth::id();
        $leader_proceedings->save();

        $step = time_lines::find([
            'steps_id' => $step_id,
            'users_id' => Auth::id(),
        ])->first();

        $step->fecha_finalizacion = Carbon::now();
        $step->estado = 3;
        $step->save();
    }
}