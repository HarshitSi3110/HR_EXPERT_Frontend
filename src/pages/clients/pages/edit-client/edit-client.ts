import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-client',
  imports: [FormsModule ,NgIf],
  templateUrl: './edit-client.html',
  styleUrl: './edit-client.scss',
})
export class EditClient {
  clientId!: string;
  loading = true;
  submitted = false;

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

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id')!;
    this.fetchClient();
  }

  fetchClient() {
    this.clientService.getClientById(this.clientId).subscribe({
      next: (res) => {
        this.formData = res;
        this.loading = false;
      },
      error: () => {
        alert('Client not found');
        this.router.navigate(['/clients']);
      },
    });
  }

  submit() {
    this.clientService.updateClient(this.clientId, this.formData).subscribe({
      next: () => {
        this.submitted = true;
        setTimeout(() => {
          this.router.navigate(['/clients']);
        }, 1200);
      },
      error: () => alert('Update failed'),
    });
  }
}
