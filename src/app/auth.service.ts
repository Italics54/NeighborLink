import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private username = new BehaviorSubject<string | null>(null);
  username$ = this.username.asObservable();

  login(user: string) {
    this.loggedIn.next(true);
    this.username.next(user);
  }

  logout() {
    this.loggedIn.next(false);
    this.username.next(null);
  }
}
