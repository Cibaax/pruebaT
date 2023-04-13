<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ciiu as CiiuModel;

class Ciiu extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ciius = json_decode(file_get_contents(base_path('database/seeders/data/ciiu.json')));
        collect($ciius)->map(function($actividad, $codigo) {
            CiiuModel::firstOrNew([ 'codigo' => $codigo, 'actividad' => $actividad])->save();
        });
    }
}
