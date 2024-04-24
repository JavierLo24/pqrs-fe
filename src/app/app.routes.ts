import { Routes } from '@angular/router';

export const routes:
Routes = [
  {
    path: 'semillero',
    loadChildren: () => import('./pqrs/pqrs.routes').then(m => m.PQRS_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'semillero'
  }
];
