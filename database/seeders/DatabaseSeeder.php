<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        (new Departamentos())->run();
        (new Ciiu())->run();
        (new Steps())->run();

        Role::updateOrCreate([
            'name' => 'Transporto'
        ], [
            'name' => 'Transporto'
        ]);

        Role::updateOrCreate([
            'name' => 'Administrador'
        ], [
            'name' => 'Administrador'
        ]);
        
        User::updateOrCreate([
            'email' => 'admin@admin.com'
        ], [ 
            'name' => 'admin', 
            'email' => 'admin@admin.com',
            'password' => bcrypt('12345678')
        ])->assignRole('Transporto');

        $rol_usuario = Role::updateOrCreate([
            'name' => 'Usuario'
        ], [
            'name' => 'Usuario'
        ]);

        $permission = Permission::updateOrCreate([
            'name' => 'Ver linea de tiempo'
        ], [
            'name' => 'Ver linea de tiempo'
        ]);

        $permission->assignRole($rol_usuario);
    }
}
