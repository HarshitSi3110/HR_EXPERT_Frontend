import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private API = 'http://localhost:5000/api/clients';

  constructor(private http: HttpClient) {}

  // CREATE CLIENT
  createClient(data: any) {
    return this.http.post(this.API, data);
  }

  // GET ALL CLIENTS
  getClients() {
    return this.http.get<any[]>(this.API);
  }

  // GET CLIENT BY ID
  getClientById(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  // UPDATE CLIENT
  updateClient(id: string, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }

  // DELETE CLIENT
  deleteClient(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
