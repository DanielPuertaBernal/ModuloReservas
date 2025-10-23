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
      imagen: 'https://tse2.mm.bing.net/th/id/OIP.zfcdvjbMEAeMOaZxtF0YyQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 2,
      nombre: 'Habitación Doble',
      descripcion: 'Cómoda habitación doble con aire acondicionado.',
      capacidad: 2,
      precio: 200000,
      estado: 'Disponible',
      imagen: 'https://www.hotelflorencedixie.cl/wp-content/uploads/2017/11/Habitacion-Doble-Est%C3%A1ndar-001-Hotel-Lady-Florence-Dixie.jpg',
    },
    {
      id: 3,
      nombre: 'Suite Presidencial',
      descripcion: 'Lujo y confort con terraza panorámica y minibar.',
      capacidad: 2,
      precio: 500000,
      estado: 'Reservada',
      imagen: 'https://images.mirai.com/INFOROOMS/100121188/zYnpoAdCAeU3oD8vKDHF/zYnpoAdCAeU3oD8vKDHF_original.jpg',
    },
    {
      id: 4,
      nombre: 'Habitación Individual',
      descripcion: 'Espacio privado ideal para una persona.',
      capacidad: 1,
      precio: 150000,
      estado: 'Disponible',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.bNmyIZ2vz4Qzd4seFNBFrwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  obtenerHabitaciones(): Observable<Habitacion[]> {
    return of(this.habitaciones);
  }
}
