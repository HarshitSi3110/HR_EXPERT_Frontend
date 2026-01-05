

import { Routes } from '@angular/router';
import { EmployeeList } from './pages/employee-list/employee-list';
import { AddEmployee } from './pages/add-employee/add-employee';
import { EditEmployee } from './pages/edit-employee/edit-employee';

export const EMPLOYEE_ROUTES: Routes = [
  { path: '', component: EmployeeList },
  { path: 'add-employee', component: AddEmployee },
  { path: 'employee-list', component: EmployeeList },
  { path: 'edit-employee/:id', component: EditEmployee },
];
