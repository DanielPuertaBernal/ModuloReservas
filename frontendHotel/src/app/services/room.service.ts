import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  capacidad: number;
  precio: number;
  estado: string;
  imagen: string;
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private habitaciones: Habitacion[] = [
    {
      id: 1,
      nombre: 'Suite Familiar',
      descripcion: 'Amplia habitación con vista al mar y jacuzzi privado.',
      capacidad: 4,
      precio: 350000,
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      id: 2,
      nombre: 'Habitación Doble',
      descripcion: 'Cómoda habitación doble con aire acondicionado.',
      capacidad: 2,
      precio: 200000,
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1560067174-8947f2a4a12a',
    },
    {
      id: 3,
      nombre: 'Suite Presidencial',
      descripcion: 'Lujo y confort con terraza panorámica y minibar.',
      capacidad: 2,
      precio: 500000,
      estado: 'Reservada',
      imagen: 'https://images.unsplash.com/photo-1600585154209-3d31cf9b8b58',
    },
    {
      id: 4,
      nombre: 'Habitación Individual',
      descripcion: 'Espacio privado ideal para una persona.',
      capacidad: 1,
      precio: 150000,
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1628874691193-1cf4d9b36f5a',
    },
  ];

  obtenerHabitaciones(): Observable<Habitacion[]> {
    return of(this.habitaciones);
  }
}
