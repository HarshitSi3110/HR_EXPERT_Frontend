// import { Routes } from '@angular/router';


// export const CLIENT_ROUTES: Routes = [
//     {
//     path: '',
//     component: ClientsHome,
//   },
//   { path: 'add', component: AddClient },
//   { path: 'edit/:id', component: EditClient },
// ];

import { Routes } from '@angular/router';
import { ClientList } from './pages/client-list/client-list';
import { AddClient } from './pages/add-client/add-client';
import { EditClient } from './pages/edit-client/edit-client';
import { ClientsHome } from './pages/clients-home/clients-home';

export const CLIENT_ROUTES: Routes = [
  { path: '', component: ClientsHome },
  { path: 'add-client', component: AddClient },
  { path: 'client-home', component: ClientsHome },
  { path: 'edit-client/:id', component: EditClient },
];
