import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
    imports: [
    CommonModule,
    RouterModule   ,NgIf
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList {
  employees: any[] = [];
  loading = true;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.employees = res;
        this.loading = false;
        console.log('Employees:', this.employees);
      },
      error: (err:any) => {
        console.error('Failed to load employees', err);
        this.loading = false;
      },
    });
  }
}
