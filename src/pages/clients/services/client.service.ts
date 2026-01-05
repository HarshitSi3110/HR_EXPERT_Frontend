import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private API = `${environment.apiUrl}/clients`;

  constructor(private http: HttpClient) {}

  createClient(data: any) {
    return this.http.post(this.API, data);
  }

  getClients() {
    return this.http.get<any[]>(this.API);
  }

  getClientById(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateClient(id: string, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }

  deleteClient(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
