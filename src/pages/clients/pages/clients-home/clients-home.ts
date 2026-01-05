import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Header } from "../../../../app/shared/components/header/header";

@Component({
  selector: 'app-clients-home',
 imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './clients-home.html',
  styleUrl: './clients-home.scss',
})
export class ClientsHome {
clients: any[] = [];
  loading = false;
  error = '';

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.loading = true;

    this.clientService.getClients().subscribe({
      next: (res) => {
        this.clients = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load clients';
        this.loading = false;
      },
    });
  }

  goBack(){this.router.navigate(['/dashboard']);}

  deleteClient(id: string) {
    if (!confirm('Are you sure you want to delete this client?')) return;

    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }
}
