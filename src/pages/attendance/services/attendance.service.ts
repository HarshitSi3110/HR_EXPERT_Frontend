import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/environment';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private baseUrl = `${environment.apiUrl}/attendance`;
  private employeeUrl = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient) {}

  getEmployeesByClient(clientId: string) {
    return this.http.get(
      `${this.employeeUrl}/by-client/${clientId}`
    );
  }

  markAttendance(payload: any) {
    return this.http.post(`${this.baseUrl}/mark`, payload);
  }
}
