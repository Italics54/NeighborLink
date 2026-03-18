import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RoundRockEvents } from '../Round Rock/roundRockEvents';
import { GeorgetownEvents } from '../Georgetown/georgetownEvents';
import { RoundRockTodaysEvents } from '../Round Rock/roundRockCalendar';
import { GeorgetownTodaysEvents } from '../Georgetown/georgetownCalendar';
import { HomeEvent, ResourceCard } from '../resources/utils';
import { RoundRockresourcesCards } from '../Round Rock/roundRockResources';
import { GeorgetownResourcesCards } from '../Georgetown/GeorgetownResources';


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
  currentDay: string = (localStorage.getItem('Community') === 'roundrock') ? RoundRockTodaysEvents[0].date: GeorgetownTodaysEvents[0].date
  showModal = false;
  events = this.currentEvents()
  selectedCommunity = localStorage.getItem('Community') === 'roundrock' ? 'Round Rock' : 'Georgetown'

  constructor(private router: Router, private authService: AuthService) {
    this.authService.loggedIn$.subscribe(status => this.isLoggedIn = status);
    this.authService.username$.subscribe(name => this.username = name);
  }

  currentEvents(): HomeEvent[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockEvents
    if (localStorage.getItem('Community') === 'georgetown') return GeorgetownEvents
    return []
  }

  currentResources(): ResourceCard[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockresourcesCards 
    if (localStorage.getItem('Community') === 'georgetown') return GeorgetownResourcesCards
    return []
  }

  getIcon(category: string): string {
  switch (category) {
    case 'food': return '🍽️';
    case 'health': return '🩺';
    case 'education': return '📚';
    case 'parks': return '🌳';
    case 'store': return '🛒';
    default: return '📍';
  }
}

featuredResources = [
  this.currentResources()[0],
  this.currentResources()[2],
  this.currentResources()[4]
];

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

  getDayFromDate(currentDay: string): string {
    const dateString: string = currentDay;
    const date: Date = new Date(dateString);

    const dayIndex: number = date.getDay();

    const days: string[] = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return days[dayIndex]
  }
}
