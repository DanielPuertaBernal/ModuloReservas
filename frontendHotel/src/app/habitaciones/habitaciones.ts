import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService, Habitacion } from '../services/room.service';
import { Reservas } from '../reservas/reservas';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, Reservas],
  templateUrl: './habitaciones.html',
  styleUrls: ['./habitaciones.scss']
})
export class Habitaciones implements OnInit {
  habitaciones: Habitacion[] = [];
  cargandoHabitaciones = true;
  habitacionSeleccionada: Habitacion | null = null;
  filtro: string = '';

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

  habitacionesFiltradas(): Habitacion[] {
    const term = this.filtro.trim().toLowerCase();
    if (!term) return this.habitaciones;

    return this.habitaciones.filter(h => {
      const texto = `${h.nombre} ${h.descripcion} ${h.estado} ${h.capacidad} personas`.toLowerCase();
      // Búsqueda flexible: ignora tildes, espacios, plurales y similitudes
      const normalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const busqueda = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizado.includes(busqueda);
    });
  }
  abrirReserva(habitacion: Habitacion): void {
    this.habitacionSeleccionada = habitacion;
  }

  cerrarReserva(): void {
    this.habitacionSeleccionada = null;
  }
}
