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
      descripcion: 'Lujo y confort con terraza panorámica, minibar y servicio VIP.',
      capacidad: 2,
      precio: 500000,
      estado: 'Reservada',
      imagen: 'https://images.mirai.com/INFOROOMS/100121188/zYnpoAdCAeU3oD8vKDHF/zYnpoAdCAeU3oD8vKDHF_original.jpg',
    },
    {
      id: 4,
      nombre: 'Habitación Individual',
      descripcion: 'Espacio privado ideal para una persona. Incluye desayuno.',
      capacidad: 1,
      precio: 150000,
      estado: 'Disponible',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.bNmyIZ2vz4Qzd4seFNBFrwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 5,
      nombre: 'Suite Romántica',
      descripcion: 'Perfecta para parejas. Decoración romántica, vino de cortesía y vista al atardecer.',
      capacidad: 2,
      precio: 420000,
      estado: 'Disponible',
      imagen: 'https://th.bing.com/th/id/R.d75d8e505a22e71d1ee0462bb5dd6f29?rik=hEINLfNIriEAcQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f642c1d5a227d62555176db53%2f64340de58d5c83736659861d%2f643953c1ebd553120d23168d%2f1719512861107%2fSuite%2bRomantica%2bVolcanica%2b60%2b-%2bLuna%2bVolcan%2b-%2bHotel%2ben%2bBanos%2bEcuador.jpeg%3fformat%3d1500w&ehk=SPVhm%2foDKXJQS7KLVSStxNyivgC%2bbkjyyaMEj%2bOewKs%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 6,
      nombre: 'Habitación Deluxe',
      descripcion: 'Diseño moderno, cama king y balcón con vista a la ciudad.',
      capacidad: 2,
      precio: 300000,
      estado: 'Disponible',
      imagen: 'https://th.bing.com/th/id/R.ab19b02b00385560a31e31dd75b67d08?rik=aE860Mhb8AmCRQ&pid=ImgRaw&r=0',
    },
    {
      id: 7,
      nombre: 'Habitación Ecológica',
      descripcion: 'Decoración natural, materiales sostenibles y aire purificado.',
      capacidad: 3,
      precio: 250000,
      estado: 'Disponible',
      imagen: 'https://lacastapatate.com/wp-content/uploads/2021/06/Habitacion-ecologica-botellas-.jpg',
    },
    {
      id: 8,
      nombre: 'Suite Ejecutiva',
      descripcion: 'Ideal para viajes de negocios. Escritorio, Wi-Fi premium y servicio de café.',
      capacidad: 2,
      precio: 380000,
      estado: 'Reservada',
      imagen: 'https://www.swissotel.com/assets/0/92/2119/2990/3029/3031/6442451693/c5e4d819-81b8-49cd-b133-3a067fbebc30.jpg',
    },
    {
      id: 9,
      nombre: 'Habitación con Balcón',
      descripcion: 'Relájate con vista al jardín y disfruta del sonido de la naturaleza.',
      capacidad: 2,
      precio: 270000,
      estado: 'Disponible',
      imagen: 'https://tse4.mm.bing.net/th/id/OIP.LxgsUiSZ2A58cUAYcba6NgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 10,
      nombre: 'Habitación Familiar Deluxe',
      descripcion: 'Espacio para toda la familia con área de juegos y minibar incluido.',
      capacidad: 5,
      precio: 450000,
      estado: 'Disponible',
      imagen: 'https://tse4.mm.bing.net/th/id/OIP.4vp_IJGa8abvQanUT7E62wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 11,
      nombre: 'Penthouse Vista al Mar',
      descripcion: 'Lujoso penthouse con jacuzzi, terraza privada y vista panorámica.',
      capacidad: 4,
      precio: 800000,
      estado: 'Disponible',
      imagen: 'https://tse2.mm.bing.net/th/id/OIP.oJpuTwwqxhczAnvrbGeOCgHaEa?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 12,
      nombre: 'Habitación Estándar Económica',
      descripcion: 'Ideal para estancias cortas. Cómoda, limpia y funcional.',
      capacidad: 2,
      precio: 120000,
      estado: 'Disponible',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.FCXRnf1C9RGA2-53DOrT0AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  obtenerHabitaciones(): Observable<Habitacion[]> {
    return of(this.habitaciones);
  }
}
