<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompaniesController;
use App\Http\Controllers\Api\StepsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\HelperController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/steps/get', [StepsController::class, 'getActualStep']);
    Route::get('/compania/show', [CompaniesController::class, 'show']);
    Route::post('/compania/create', [CompaniesController::class, 'create']);


    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
});

Route::get('/ciiu', [HelperController::class, 'ciiu']);
Route::get('/departamentos', [HelperController::class, 'departamentos']);
Route::get('/ciudades/{departamento_id}', [HelperController::class, 'ciudades']);

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
