import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface Reserva {
  codigo: string;
  usuario: string;
  email: string;
  habitacion: string;
  hotel: string;
  fechaInicio: Date;
  fechaFin: Date;
  noches: number;
  precioTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  // Simular creación de reserva con delay
  crearReserva(datos: any): Observable<{ exito: boolean; mensaje: string; codigo?: string }> {
    return new Observable(observador => {
      setTimeout(() => {
        // Generar código aleatorio
        const codigo = `R-${Math.floor(1000 + Math.random() * 9000)}`;
        
        observador.next({
          exito: true,
          mensaje: `Habitación reservada con éxito, código de reserva ${codigo}`,
          codigo: codigo
        });
        observador.complete();
      }, 2500); // Simula 2.5 segundos de procesamiento
    });
  }

  // Verificar disponibilidad
  verificarDisponibilidad(habitacionId: string, fechaInicio: Date, fechaFin: Date): Observable<boolean> {
    // Simular verificación
    return of(true).pipe(delay(800));
  }
}