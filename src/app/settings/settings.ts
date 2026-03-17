import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings {
  selectedCommunity: string = '';
  currentCommunityValue: string = '';

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
    localStorage.setItem('Community', this.selectedCommunity);
    this.currentCommunityValue = this.selectedCommunity;

    window.location.reload();

  }
}
