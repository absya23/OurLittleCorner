<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// ========= ADMIN ==========
// -> get all admin
Route::get('admin', 'AdminController@index');
// -> check login
Route::post('admin/login', 'AdminController@login');

// =========== CATALOGUE ============================== 
// -> get all catalogue
Route::get('catalogue', 'CatalogueController@index');
// -> thêm catalogue
Route::post('catalogue', 'CatalogueController@store');
// -> xóa catalogue
Route::delete('catalogue/{id}', 'CatalogueController@destroy');
// -> sửa catalogue
Route::put('catalogue/{id}', 'CatalogueController@update');

// =========== TYPE PRODUCT ===========================
// -> get all catalogue
Route::get('types', 'TypeProductController@index');
// -> thêm catalogue
Route::post('types', 'TypeProductController@store');
// -> xóa catalogue
Route::delete('types/{id}', 'TypeProductController@destroy');
// -> sửa catalogue
Route::put('types/{id}', 'TypeProductController@update');

// ===========  PRODUCT ===========================
// -> get all PRODUCT
Route::get('product', 'ProductController@index');
// -> thêm 1 PRODUCT
Route::post('product', 'ProductController@store');
// -> xóa 1 PRODUCT
Route::delete('product/{id}', 'ProductController@destroy');
// -> sửa 1 PRODUCT
Route::put('product/{id}', 'ProductController@update');
// -> lấy sản phẩm theo danh mục
// -> lấy sản phẩm theo loại sản phẩm
// -> sắp xếp sản phẩm theo giá


// ===========  IMAGES ===========================
// -> get all IMAGES theo id của sản phẩm
Route::get('images/{idprod}', 'ImagesController@show');
// -> thêm 1 IMAGES theo sp theo id của sản phẩm
Route::post('images', 'ImagesController@store');
// -> xóa 1 IMAGES theo sp theo id của ảnh
Route::delete('images/{id}', 'ImagesController@destroy');