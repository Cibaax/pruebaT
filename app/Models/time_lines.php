<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class time_lines extends Model
{
    use HasFactory;

    protected $fillable = [
        'fecha_referencia',
        'estado',
        'steps_id',
        'users_id',
        'companies_id'
    ];

    public function step()
    {
        return $this->hasOne(steps::class, 'id', 'steps_id');
    }
}