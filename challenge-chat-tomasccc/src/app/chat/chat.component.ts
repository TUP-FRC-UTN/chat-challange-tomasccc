import { AfterViewInit, Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { After } from 'v8';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MensajeUsuarioComponent,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent  {
  
  mensajes: string[] = ['Sala de chat '];
  constructor() { }
  
  recibirMensaje(mensaje: string, usuario: number) {
    switch (usuario) {
      case 1:
        mensaje = 'Pepe: ' + mensaje;
        break;
      case 2:
        mensaje = 'María: ' + mensaje;
        break;
    }
    this.mensajes.push(mensaje);
    console.log(this.mensajes);
  }
}
