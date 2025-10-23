import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Habitacion } from '../services/room.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.html',
  styleUrls: ['./reservas.scss']
})
export class Reservas {
  @Input() habitacion!: Habitacion | null;
  @Output() cerrar = new EventEmitter<void>();

  paso = 1;

  nombre = '';
  email = '';
  telefono = '';
  documento = '';
  fechaInicio = '';
  fechaFin = '';

  siguiente() {
    if (this.paso < 3) this.paso++;
  }

  anterior() {
    if (this.paso > 1) this.paso--;
  }

  obtenerProgreso() {
    return (this.paso - 1) * 50;
  }

  confirmar() {
    alert('Reserva confirmada con éxito!');
    this.emitirCerrar();
  }

  // 👉 Método intermedio para emitir el evento
  emitirCerrar() {
    this.cerrar.emit();
  }
}
