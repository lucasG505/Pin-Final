<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consulta;
use App\Mail\ConsultaCreada;
use Illuminate\Support\Facades\Mail;

class ConsultaController extends Controller
{
    //
    public function storeData(Request $request)
    {
        // Valido los datos
        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|max:100',
            'phone' => 'required|string|max:11',
            'message'=> 'required|string|max:250',
        ]);
        //si se validaron creo la nueva consulta e inicializo sus valores
        $consulta =new Consulta();
        $consulta->name = $request->input('name');
        $consulta->phone = $request->input('phone');
        $consulta->email = $request->input('email');
        $consulta->message = $request->textarea('message');
        //la guardo en la base de datos
        $consulta->save();
        //envio un mail, con los datos de la consulta
        Mail::to('lucas.mariano.g@gmail.com')->send(new ConsultaCreada($consulta));
        
        return response()->json([
            'message' => $consulta->message,
            'result' => 'Tu mensaje fue enviado con éxito'
         ]);
    }
}
