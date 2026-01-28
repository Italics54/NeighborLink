import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private username = new BehaviorSubject<string | null>(null);
  username$ = this.username.asObservable();

  constructor(private http: HttpClient) {
    // auto login if token exists
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  /* ========================
     SIGN UP
  ======================== */
  signup(data: {
    name: string;
    email: string;
    password: string;
    community: string;
  }) {
    // call backend signup
    return this.http.post<{ token: string; name: string }>(`${this.apiUrl}/signup`, data)
      .pipe(
        tap(res => {
          // automatically log in the user
          localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
          this.username.next(res.name);
        })
      );
  }

  /* ========================
     LOGIN
  ======================== */
  login(email: string, password: string) {
    return this.http
      .post<{ token: string; name: string }>(`${this.apiUrl}/login`, {
        email,
        password
      })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
          this.username.next(res.name);
        })
      );
  }

  /* ========================
     LOGOUT
  ======================== */
  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.username.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
