import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
  imports: [CommonModule]
})
export class Welcome implements OnInit {

  showModal = false;

  ngOnInit(): void {
    const hasSeenIntro = localStorage.getItem('seenIntroModal');

    if (!hasSeenIntro) {
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
    localStorage.setItem('seenIntroModal', 'true');
  }

}