import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../app/core/layouts/main-layout/main-layout';
import { Dashboard } from '../pages/dashboard/dashboard';
import { About } from './shared/components/about/about';
import { Contact } from './shared/components/contact/contact';
import { Privacy } from './shared/components/privacy/privacy';
import { Faq } from './shared/components/faq/faq';

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: Dashboard },

      {
        path: 'clients',
        loadChildren: () =>
          import('../pages/clients/client.routes').then(m => m.CLIENT_ROUTES),
      },

      {
        path: 'employees',
        loadChildren: () =>
          import('../pages/employees/employee.routes').then(m => m.EMPLOYEE_ROUTES),
      },
  {
    path: 'attendance',
    loadChildren: () =>
      import('../pages/attendance/attendance.routes')
        .then(m => m.ATTENDANCE_ROUTES)
  },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'privacy', component: Privacy},
      {
  path: 'faq',
  component: Faq
}

    ],
  },
];
