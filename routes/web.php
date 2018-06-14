<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'PagesController@index');
Route::get('/carrito', 'ShoppingCartsController@index');
Route::resource('products', 'ProductsController');
Route::resource('in_shopping_carts', 'InShoppingCartsController',[
    'only' => ['store', 'destroy']
]);


//Carga asincrona
Route::get('/data/dataAjax', 'ProductsController@loadData');
Route::get('/data/loadAjax', 'ProductsController@loadDataAjax');
Route::post('/data/loadAjaxOne', 'ProductsController@loadDataAjaxOne');
Route::post('/data/loadAjaxView', 'ProductsController@loadDataAjaxView');



