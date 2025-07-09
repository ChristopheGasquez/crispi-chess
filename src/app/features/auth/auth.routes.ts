import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.component')
      .then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register')
      .then(m => m.Register),
  },
];
