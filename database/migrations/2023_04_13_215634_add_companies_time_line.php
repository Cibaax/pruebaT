<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompaniesTimeLine extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('time_lines', function (Blueprint $table) {
            $table->unsignedBigInteger('companies_id');
            $table->index(["companies_id"], 'fk_user_company_timelines_idx');
            $table->foreign('companies_id', 'fk_user_company_timelines_idx')
                ->references('id')->on('companies')
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('time_lines');
        });
    }
}
