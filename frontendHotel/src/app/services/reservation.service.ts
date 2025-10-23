import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private lastCodigo: string | null = null;

  setCodigo(codigo: string) {
    this.lastCodigo = codigo;
  }

  getCodigo(): string | null {
    return this.lastCodigo;
  }

  clear() {
    this.lastCodigo = null;
  }
}
