import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../enviroments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = `${environment.apiUrl}/auth`;

  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private userSubject = new BehaviorSubject<any>(this.getStoredUser());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  /* ======================
     AUTH METHODS
  ====================== */

  login(data: { mobile: string; password: string }): Observable<any> {
    return this.http.post(`${this.API}/login`, data);
  }

  register(data: {
    name: string;
    email: string;
    mobile: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.API}/register`, data, {
      headers: this.jsonHeaders,
    });
  }

  /* ======================
     LOCAL STORAGE
  ====================== */

  saveAuth(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getStoredUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUser(): any {
    return this.getStoredUser();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  clearUser(): void {
    this.logout();
  }
}
