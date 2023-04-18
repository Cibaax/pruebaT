<?php

namespace App\Http\Controllers\Api;

use App\Models\steps_data;
use App\Models\time_lines;
use App\Models\steps as StepModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Auth;

class StepsController extends Controller
{
    function getActualStep()
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

    function saveStep(request $request, $timeline_id)
    {
        if ($timeline = time_lines::find($timeline_id)) {
            if (!$steps_data = steps_data::where("steps_id", $timeline->step->id)->where("users_id", Auth::id())->first()) {
                $steps_data = new steps_data();
            }

            $steps_data->payload = json_encode($request->payload);
            $steps_data->users_id = Auth::id();
            $steps_data->steps_id = $timeline->step->id;
            $steps_data->save();

            $timeline->fecha_finalizacion = Carbon::now();
            $timeline->estado = 3;
            $timeline->save();
        }

        return $this->getActualStep();
    }

    public function processData(Request $request, $timeline_id)
    {
        if ($csv = $request->file) {
            $conductores = [];
            if (($open = fopen($csv->path(), "r")) !== FALSE) {
                $first = true;
                while (($data = fgetcsv($open, 1000, ",")) !== FALSE) {
                    if (!$first) {
                        $conductores[] = $data;
                    }
                    $first = false;
                }
                fclose($open);
            }

            if ($timeline = time_lines::find($timeline_id)) {
                $steps_data = new steps_data();
                $steps_data->payload = json_encode([
                    "conductores" => $conductores
                ]);
                $steps_data->users_id = Auth::id();
                $steps_data->steps_id = $timeline->step->id;
                $steps_data->save();
            }

            return $steps_data;
        }
    }

    public function validate5Step(Request $request, $timeline_id)
    {
        if ($timeline = time_lines::find($timeline_id)) {
            $step_data = steps_data::where("steps_id", $timeline->step->id)->where("users_id", Auth::id())->first();

            return $step_data ?? null;
        }
    }

    public function updateConductores(Request $request, $timeline_id)
    {
        if ($timeline = time_lines::find($timeline_id)) {
            $step_data = steps_data::where("steps_id", $timeline->step->id)->where("users_id", Auth::id())->first();
            $step_data->payload = json_encode([
                "conductores" => $request->payload
            ]);
            $step_data->save();

            return $step_data ?? null;
        }
    }
}