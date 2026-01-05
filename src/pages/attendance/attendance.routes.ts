import { Routes } from '@angular/router';
import { AttendanceHome } from './pages/attendance-home/attendance-home';
import { MarkAttendance } from './pages/mark-attendance/mark-attendance';

export const ATTENDANCE_ROUTES: Routes = [
  {
    path: '',
    component: AttendanceHome},
  {
    path: 'mark',
    component: MarkAttendance
  }
];
