<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Http\Controllers\Consulta;

class ConsultaCreada extends Mailable
{
    use Queueable, SerializesModels;

    public $consultar;
    /**
     * Create a new message instance.
     */
    public function __construct(Consulta $consulta)
    {
        //seteo la variable publica consultar con el valor de la variable tipo Consulta que viene del controller
        $this->consultar = $consulta;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        //digo que se envide desde el mail dentro del dato consulta, y con el motivo del correo sea Consulta Creada
        return new Envelope(
            from: $this->consultar->email,
            subject: 'Consulta Creada',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        //creo el contenido del mail
        return new Content(
            view: 'mail.consulta.created',
            with: [
                'consultaName' => $this->consultar->name,
                'consultaPhone' => $this->consultar->phone,
                'consultaMessage' => $this->consultar->message,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
