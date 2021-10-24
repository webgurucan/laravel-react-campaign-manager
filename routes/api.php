<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Resources\CampaignResource;
use App\Models\Campaign;
use App\Http\Controllers\Api\CampaignController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/campaigns', function () {
    return CampaignResource::collection(Campaign::orderBy('name')->get());
});

Route::get('/campaign/{id}', [CampaignController::class, 'view']);

Route::post('/campaign/uploadfile', [CampaignController::class, 'upload']);
Route::post('/campaign/store', [CampaignController::class, 'store']);

