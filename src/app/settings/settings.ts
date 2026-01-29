import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings {
  selectedCommunity: string | null = null;

  selectCommunity(name: string) {
    this.selectedCommunity = name;
  }

  notifyComingSoon(name: string) {
    alert(`${name} community page is coming soon!`);
  }

  saveCommunity(event: Event) {
    event.preventDefault();
    if (!this.selectedCommunity) return;
  }
}
