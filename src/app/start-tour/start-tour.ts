import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start-tour',
  imports: [CommonModule],
  templateUrl: './start-tour.html',
  styleUrl: './start-tour.css',
})
export class StartTour {

  openTourModal(): void {
    localStorage.removeItem('seenIntroModal');
    window.location.reload()
  }
}
