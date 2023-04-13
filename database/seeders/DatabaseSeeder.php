<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

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

        User::firstOrNew([ 
            'name' => 'admin', 
            'email' => 'admin@admin.com',
            'password' => bcrypt('12345678')
        ])->save();
    }
}
