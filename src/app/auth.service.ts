import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '/api';

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private username = new BehaviorSubject<string | null>(null);
  username$ = this.username.asObservable();

  private userEmail = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmail.asObservable();


  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  signup(data: { name: string; email: string; password: string; community: string }) {
    return this.http.post<{ token: string; name: string }>(`${this.apiUrl}/signup`, data)
      .pipe(
        tap(res => {
          if (res.token) localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
          localStorage.setItem('Community', data.community)
          this.username.next(res.name);
        })
      );
  }


  login(email: string, password: string) {
    return this.http.post<{ token: string; name: string, community: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
          localStorage.setItem('Community', res.community)
          this.username.next(res.name);
          this.userEmail.next(email)
        })
      );
  }


  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.username.next(null);
    localStorage.removeItem('Community')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}