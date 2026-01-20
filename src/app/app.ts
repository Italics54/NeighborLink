import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
    standalone: true,
  styleUrls: ['./app.css'],
  imports: [RouterOutlet]
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
