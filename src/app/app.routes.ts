import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component')
      .then(m => m.PublicLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes')
          .then(m => m.authRoutes),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component')
      .then(m => m.AdminLayout),
  },
  {
    path: 'welcome/:userNickName',
    loadComponent: () => import('./layouts/private-layout/private-layout')
      .then(m => m.PrivateLayout),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
