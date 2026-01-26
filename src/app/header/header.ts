import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  constructor(private router: Router){}

  goToDashboard() {
    this.router.navigate(['/sign-in']);
  }
}
