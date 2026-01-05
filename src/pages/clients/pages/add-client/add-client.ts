import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  imports: [CommonModule, RouterModule ,NgIf, FormsModule],
  templateUrl: './add-client.html',
  styleUrl: './add-client.scss',
})
export class AddClient {
  submitted = false;
  loading = false;
  error = '';

  formData: any = {
    clientName: '',
    clientId: '',
    companyCategory: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    state: '',
    district: '',
    pincode: '',
    gstNumber: '',
    companyAccountNumber: '',
    ifscCode: '',
    branch: '',
    remarks: '',
  };

  constructor(private clientService: ClientService) {}

  submit() {
    this.error = '';

    // BASIC VALIDATION (UI-level)
    if (
      !this.formData.clientName ||
      !this.formData.clientId ||
      !this.formData.companyCategory ||
      !this.formData.phone ||
      !this.formData.email
    ) {
      this.error = 'Please fill all required fields';
      return;
    }

    this.loading = true;

    this.clientService.createClient(this.formData).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to add client';
        this.loading = false;
      },
    });
  }

  reset() {
    this.submitted = false;
    this.formData = {};
  }



}
