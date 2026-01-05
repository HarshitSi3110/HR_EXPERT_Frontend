import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private baseUrl = 'http://localhost:5000/api/attendance';

  constructor(private http: HttpClient) {}

  getEmployeesByClient(clientId: string) {
    return this.http.get(
      `http://localhost:5000/api/employees/by-client/${clientId}`
    );
  }

  markAttendance(payload: any) {
    return this.http.post(`${this.baseUrl}/mark`, payload);
  }
}
