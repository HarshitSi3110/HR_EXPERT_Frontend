import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  imports: [
    CommonModule,
    RouterModule , FormsModule  // ✅ REQUIRED FOR routerLink
  ],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.scss',
})
export class EditEmployee {
 employeeId!: string;
  loading = true;
  submitted = false;
  clients: any[] = [];

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
    client: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id')!;
    this.loadEmployee();
    this.loadClients();
  }

  loadEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (res:any) => {
        this.formData = {
          ...res,
          client: res.client?._id || '',
          dob: res.dateOfBirth?.substring(0, 10),
          doj: res.dateOfJoining?.substring(0, 10),
        };
        this.loading = false;
      },
      error: (err:any) => console.error(err),
    });
  }

  loadClients() {
    this.employeeService.getClients().subscribe({
      next: (res:any) => (this.clients = res),
    });
  }

  submit() {
    this.employeeService.updateEmployee(this.employeeId, {
      ...this.formData,
      dateOfBirth: this.formData.dob,
      dateOfJoining: this.formData.doj,
    }).subscribe({
      next: () => {
        this.submitted = true;
      },
      error: (err:any) => alert(err.error.message),
    });
  }

  back() {
    this.router.navigate(['/employees']);
  }
}
