<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_company', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('companies_id');
            $table->unsignedBigInteger('users_id');

            $table->index(["companies_id"], 'fk_user_company_companies1_idx');

            $table->index(["users_id"], 'fk_user_company_users1_idx');


            $table->foreign('companies_id', 'fk_user_company_companies1_idx')
                ->references('id')->on('companies')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('users_id', 'fk_user_company_users1_idx')
                ->references('id')->on('users')
                ->onDelete('no action')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_company');
    }
}
