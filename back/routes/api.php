<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

//ruta createConsulta que utiliza la funcion storedata del controlador consultacontroller y crea la consulta. 

Route::post('createConsulta', 'App\Http\Controllers\ConsultaController@storeData');