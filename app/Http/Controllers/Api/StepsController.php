<?php

namespace App\Http\Controllers\Api;

use App\CustomClasses\DocTemplates;
use App\Models\steps_data;
use App\Models\time_lines;
use App\Models\drivers;
use App\Models\steps as StepModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Magyarjeti\LaravelLipsum\LipsumFacade;
use PhpOffice\PhpWord\TemplateProcessor;
use Auth, Lipsum;
use WordTemplate;
use ZipArchive;

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
            
            $step = $time_line->step;
            $time_line['step'] = $step;
            $time_line['charts'] = [
                "contratos" => steps_data::where("steps_id", $step->id)->where("users_id", Auth::id())->first()
            ];
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
            // $csv->store('public');
            if (($open = fopen($csv->path(), "r")) !== FALSE) {
                $first = true;
                while (($data = fgetcsv($open, 1000, ",")) !== FALSE) {
                    if (!$first) {
                        $conductores[] = $data;
                        $drivers = new drivers();
                        $drivers->nombre_completo = $data[0];
                        $drivers->numero_identificacion = $data[1];
                        $drivers->ciudad_expedicion = $data[2];
                        $drivers->fecha_nacimiento = $data[3];
                        $drivers->genero = $data[4];
                        $drivers->edad = $data[5];
                        $drivers->experiencia_especifica = $data[6];
                        $drivers->empresa_usuaria = $data[7];
                        $drivers->cargo = $data[8];
                        $drivers->escolaridad = $data[9];
                        $drivers->tipo_contrato = $data[10];
                        $drivers->zona_desplazamiento = $data[11];
                        $drivers->inscripcion_runt = $data[12];
                        $drivers->numero_inscripcion = $data[13];
                        $drivers->fecha_ingreso_empresa = $data[14];
                        $drivers->save();
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

    public function validateStep(Request $request, $timeline_id)
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

    public function exportarEncuesta61(Request $request, $time_line)
    {
        $templateProcessor = new DocTemplates(storage_path('app/templates/informe61.docx'));

        /* diagnostico */
        $templateProcessor->setValue('diagnostico', Lipsum::html());
        /* diagnostico */

        /* informacion general */
        $templateProcessor->setValue('inf_general_1', Lipsum::html());
        $templateProcessor->setValue('inf_general_2', Lipsum::html());
        $templateProcessor->setValue('inf_general_3', Lipsum::html());
        /* informacion general */

        /* Antecedentes en materia de seguridad vial */
        $templateProcessor->setValue('antecedentes_seguridad', Lipsum::html());
        /* Antecedentes en materia de seguridad vial */
        
        /* Hábitos de conducción y riesgos viales */
        $templateProcessor->setValue('habitos_conduccion', Lipsum::html());
        $templateProcessor->setValue('habitos_conduccion_resumen', Lipsum::html());
        /* Hábitos de conducción y riesgos viales */
        
        /* Recomendaciones */
        $templateProcessor->setValue('recomendaciones', Lipsum::html());
        /* Recomendaciones */

        $date = date('Ymd');
        $pathToSave = storage_path("app/templates/$date")."_informe61.docx";
        return $templateProcessor->saveAs($pathToSave);
        // $zip = new ZipArchive;
        // $res = $zip->open($templateProcessor->zip()->filename);
        // if ($res === TRUE) {
        //     $date = date('Ymd');
        //     $pathToSave = storage_path("app/templates");
        //     // $pathToSave = storage_path("app/templates/$date")."_informe61.docx";
        //     $zip->extractTo($pathToSave);
        //     $zip->close();
        //     echo 'woot!';
        //   } else {
        //     echo 'doh!';
        //   }
        // dd($zip);
        // try {
        //     $date = date('Ymd');
        //     $pathToSave = storage_path("app/templates/$date")."_informe61.xml";
        //     $templateProcessor
        // } catch (\Exception $ex) {
        //     dd($ex);
        // }
    }
}