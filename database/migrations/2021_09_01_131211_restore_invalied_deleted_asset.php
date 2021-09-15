<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class RestoreInvaliedDeletedAsset extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $assets_id = DB::table('assignments')->select('asset_id')->get()->pluck('asset_id')->toArray();
        DB::table('assets')->whereIn('id', $assets_id)->update(['deleted_at' => null]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
