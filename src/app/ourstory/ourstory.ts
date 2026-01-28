import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourstory',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './ourstory.html',
  styleUrl: './ourstory.css',
})
export class Ourstory {
  isLoggedIn = false;
  username: string | null = null;
    constructor(private router: Router, private authService: AuthService) {
    this.authService.loggedIn$.subscribe(status => this.isLoggedIn = status);
    this.authService.username$.subscribe(name => this.username = name);
  }

  goToSignUpDashboard() {
    if (this.isLoggedIn) {
      this.router.navigate(['/resources'])
    } else {
      this.router.navigate(['/sign-up']);
    }
  }
}
