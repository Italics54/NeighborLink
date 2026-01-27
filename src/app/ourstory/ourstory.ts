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
    this.router.navigate(['/sign-up']);
  }
}
