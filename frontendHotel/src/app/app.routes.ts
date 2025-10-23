import { Routes } from '@angular/router';
import { Habitaciones } from './habitaciones/habitaciones';

export const routes: Routes = [
  { path: '', redirectTo: 'habitaciones', pathMatch: 'full' },
  { path: 'habitaciones', component: Habitaciones },
  { path: '**', redirectTo: 'habitaciones' }
];
