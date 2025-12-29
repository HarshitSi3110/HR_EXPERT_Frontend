import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = 'http://localhost:5000/api/auth';

  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  // ================= REGISTER =================
  register(data: {
    name: string;
    email: string;
    mobile: string;
    password: string;
  }): Observable<any> {
    return this.http.post(
      `${this.API}/register`,
      data,
      { headers: this.jsonHeaders }
    );
  }

  // ================= LOGIN =================
  login(data: {
    mobile: string;
    password: string;
  }): Observable<any> {
    return this.http.post(
      `${this.API}/login`,
      data,
      { headers: this.jsonHeaders }
    );
  }

  // ================= TOKEN HANDLING =================
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
