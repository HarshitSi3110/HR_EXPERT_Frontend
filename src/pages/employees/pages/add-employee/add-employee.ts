import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../employees/services/employee.service';


@Component({
  selector: 'app-add-employee',
   imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss',
})
export class AddEmployee {
   clients: any[] = [];
  submitted = false;

  formData: any = {
    name: '',
    employeeId: '',
    designation: '',
    status: 'ACTIVE',
    gender: '',
    dob: '',
    doj: '',
    guardianName: '',
    relation: '',
    maritalStatus: '',
    mobilePrimary: '',
    mobileSecondary: '',
    email: '',
    address: '',
    qualification: '',
    specialization: '',
    aadhar: '',
    pan: '',
    panName: '',
    bankName: '',
    bankAccount: '',
    uan: '',
    pfEnabled: false,
    onProbation: false,
    yearlyCtc: '',
    clientId: '',
  };

  constructor(private employeeService: EmployeeService) {}

ngOnInit() {
  this.employeeService.getClients().subscribe({
    next: (res: any) => {
      this.clients = res.data || res; // ✅ supports both formats
      console.log('Clients loaded:', this.clients);
    },
    error: (err) => {
      console.error('Failed to load clients', err);
    },
  });
}

  submit() {
    this.employeeService.createEmployee(this.formData).subscribe({
      next: () => (this.submitted = true),
      error: (err) => alert(err.error?.message || 'Error'),
    });
  }

  reset() {
    this.submitted = false;
  }
}
