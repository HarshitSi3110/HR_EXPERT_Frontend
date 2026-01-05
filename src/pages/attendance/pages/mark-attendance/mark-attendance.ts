import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { FormsModule, NgModel } from '@angular/forms';
import { EmployeeService } from '../../../employees/services/employee.service';

@Component({
  selector: 'app-mark-attendance',
  imports: [NgIf,CommonModule,FormsModule],
  templateUrl: './mark-attendance.html',
  styleUrl: './mark-attendance.scss',
})
export class MarkAttendance {
  clientId=''
  clients: any[] = [];
  employees: any[] = [];

  selectedClientId = '';
  attendance: { [key: string]: 'PRESENT' | 'ABSENT' } = {};
    constructor(private attendanceService: AttendanceService, private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getClients().subscribe({
      next: (res: any) => {
        this.clients = res;
        console.log('Clients loaded:', this.clients);
      },
      error: (err) => {
        console.error('Failed to load clients', err);
      },
    });
  }

  onClientChange() {
    console.log('Selected client:', this.selectedClientId);

    if (!this.selectedClientId) return;

    this.attendanceService
      .getEmployeesByClient(this.selectedClientId)
      .subscribe((res: any) => {
        this.employees = res;
        this.attendance = {};
      });
  }


  submitAttendance() {
    const payload = {
      clientId: this.selectedClientId,
      date: new Date(),
      records: Object.keys(this.attendance).map(empId => ({
        employeeId: empId,
        status: this.attendance[empId]
      }))
    };

    this.attendanceService.markAttendance(payload).subscribe(() => {
      alert('Attendance marked successfully');
    });
  }
}
