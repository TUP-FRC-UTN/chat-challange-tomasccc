import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  mensaje: string = '';
  @Output() enviarMensaje = new EventEmitter<string>();

  emit() {
    this.enviarMensaje.emit(this.mensaje);
    this.mensaje = '';
  }
}
