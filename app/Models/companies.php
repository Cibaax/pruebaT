<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class companies extends Model
{
    use HasFactory;

    protected $fillable = [
        'razon_social',
        'representante_legal',
        'nit',
        'telefono1',
        'telefono2',
        'direccion',
        'cities_id',
        'main_activity_ciiu',
        'secondary_activity_ciiu',
        'vehiculos_propios',
        'vehiculos_contratados',
        'conductores_propios',
        'conductores_contratados'
    ];

    public function steps(){
        return $this->belongsToMany(steps::class, 'time_lines', 'companies_id', 'steps_id');
    }
}
