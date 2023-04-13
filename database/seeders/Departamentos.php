<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\departments;
use App\Models\cities;

class Departamentos extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departamentos = json_decode(file_get_contents(base_path('database/seeders/data/departamentos.json')));
        collect($departamentos)->groupBy(['id'])->map(function($departamento_x_ciudades, $codigo) {
            departments::firstOrNew([ 'id' => $codigo, 'nombre' => $departamento_x_ciudades->first()->departamento ])->save();
            $departamento = departments::find($codigo);
            $departamento_x_ciudades->map(function($ciudad) use ($departamento) {
                cities::firstOrNew([ 'id' => $ciudad->mun_id, 'nombre' => $ciudad->municipio, 'departments_id' => $departamento->id ])->save();
            });
        });
    }
}
