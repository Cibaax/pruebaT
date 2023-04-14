<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\steps as StepsModel;

class Steps extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $steps = json_decode(file_get_contents(base_path('database/seeders/data/steps.json')));
        collect($steps)->groupBy(['id'])->map(function($step) {
            StepsModel::firstOrNew(collect($step->first())->toArray())->save();
        });
    }
}
