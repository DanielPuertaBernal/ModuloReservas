import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService, Habitacion } from '../services/room.service';
import { Reservas } from '../reservas/reservas';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule, Reservas],
  templateUrl: './habitaciones.html',
  styleUrls: ['./habitaciones.scss']
})
export class Habitaciones implements OnInit {
  habitaciones: Habitacion[] = [];
  cargandoHabitaciones = true;
  habitacionSeleccionada: Habitacion | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.cargarHabitaciones();
  }

  cargarHabitaciones(): void {
    this.roomService.obtenerHabitaciones().subscribe({
      next: (data) => {
        this.habitaciones = data;
        this.cargandoHabitaciones = false;
      },
      error: (err) => {
        console.error('Error al cargar habitaciones', err);
        this.cargandoHabitaciones = false;
      }
    });
  }

  abrirReserva(habitacion: Habitacion): void {
    this.habitacionSeleccionada = habitacion;
  }

  cerrarReserva(): void {
    this.habitacionSeleccionada = null;
  }
}
