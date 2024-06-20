import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'token';
  private apiUrl = 'http://localhost:3000/api/users'; // URL de base pour les requêtes

  constructor(private http: HttpClient, private router: Router) {}

  login(user: { email: string; password: string }) {
    return this.http
      .post<any>(`${this.apiUrl}/login`, user)
      .pipe
      //      tap(res => this.storeJwtToken(res.accessToken))
      ();
  }

  signup(user: { fullName: string; email: string; password: string; iAgree: boolean;}) {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/signup`, user)
      .pipe();
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  setCurruntUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getCurruntUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  loggedIn() {
    return !!this.getJwtToken();
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem('user');
    // Redirect the user to the login page
    this.router.navigate(['login']);
  }
}
