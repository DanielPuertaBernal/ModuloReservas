import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private loadingInstance: any = null;

	mostrarError(titulo: string, mensaje: string): void {
		Swal.fire({
			icon: 'error',
			title: titulo,
			text: mensaje
		});
	}

	mostrarConfirmacion(titulo: string, mensaje: string): Promise<SweetAlertResult<any>> {
		return Swal.fire({
			title: titulo,
			text: mensaje,
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar'
		});
	}

	mostrarCargando(mensaje: string): void {
		this.loadingInstance = Swal.fire({
			title: mensaje,
			didOpen: () => {
				Swal.showLoading();
			},
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false
		});
	}

	cerrar(): void {
		Swal.close();
		this.loadingInstance = null;
	}

	mostrarConfirmacionReserva(codigo: string, email: string): void {
		Swal.fire({
			title: 'Reserva Confirmada',
			html: `Código: <strong>${codigo}</strong><br/>Se envió la confirmación a: <strong>${email}</strong>`,
			icon: 'success'
		});
	}
}

