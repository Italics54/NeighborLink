import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  isLoggedIn = false;
  username: string | null = null;
  showModal = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.loggedIn$.subscribe(status => this.isLoggedIn = status);
    this.authService.username$.subscribe(name => this.username = name);
  }

  goToSignInDashboard() {
    this.router.navigate(['/sign-in']);
  }

  goToSignUpDashboard() {
    this.router.navigate(['/sign-up']);
  }
  goToResources() {
    if (this.isLoggedIn) {
      this.router.navigate(['/resources']);
    } else {
      this.showModal = true;
    }
  }
    goToCalendar() {
    this.router.navigate(['/calendar']);
  }
}
