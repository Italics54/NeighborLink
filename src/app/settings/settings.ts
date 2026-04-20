import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings {
  selectedCommunity: string = '';
  currentCommunityValue: string = '';
  userName: string | null = localStorage.getItem('userName');
  userEmail: string | null = localStorage.getItem('userEmail');

  constructor(private authService: AuthService) {}

  selectCommunity(name: string) {
    this.selectedCommunity = name;
  }

  notifyComingSoon(name: string) {
    alert(`${name} community page is coming soon!`);
  }

  ngOnInit() {
    this.currentCommunityValue = localStorage.getItem('Community') || '';
    this.selectedCommunity = this.currentCommunityValue;
  }

  saveCommunity() {
    if (!this.selectedCommunity) return;
    this.authService.setCommunity(this.userEmail, this.selectedCommunity).subscribe({
      next: () => {
        window.location.reload();
      }
    })
    this.currentCommunityValue = this.selectedCommunity; 

  }
}
