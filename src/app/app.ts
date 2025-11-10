import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(private router: Router) {}

  openResources(event: Event) {
    event.preventDefault(); 
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/resources'])
    );
    window.open(url, '_blank');
  }
}
