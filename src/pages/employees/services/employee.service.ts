import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:5000/api/employees';
  private clientUrl = 'http://localhost:5000/api/clients';

  constructor(private http: HttpClient) {}

  /* ======================
     EMPLOYEE APIs
  ====================== */

  createEmployee(data: any): Observable<any> {
    return this.http.post(this.employeeUrl, data);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeeUrl);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.employeeUrl}/${id}`);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this.http.put(`${this.employeeUrl}/${id}`, data);
  }

  /* ======================
     CLIENT APIs
  ====================== */

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.clientUrl);
  }
}
