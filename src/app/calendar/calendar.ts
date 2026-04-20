import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent } from '../resources/utils';
import { RoundRockUpcomingEvents, RoundRockTodaysEvents, RoundRockCalendarDays } from '../Round Rock/roundRockCalendar';
import { GeorgetownUpcomingEvents, GeorgetownTodaysEvents, GeorgetownCalendarDays } from '../Georgetown/georgetownCalendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {

  upcomingEvents: CalendarEvent[] = this.currentUpcomingEvents();
  todaysEvents: CalendarEvent[] = this.currentTodayEvents();
  currentMonth: string = this.todaysEvents[0].date.split(" ")[0];
  selectedDay: number | null = null;
  selectedEvents: any[] = [];
  days = this.currentCommunityDays();


  getDay(date: string): string {
    return new Date(date).getDate().toString();
  }
  getMonth(date: string): string {
    return new Date(date).toLocaleString('default', { month: 'short' });
  }

  currentUpcomingEvents(): CalendarEvent[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockUpcomingEvents
    if (localStorage.getItem('Community') === 'georgetown') return GeorgetownUpcomingEvents
    return []
  }

  currentTodayEvents(): CalendarEvent[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockTodaysEvents
    if (localStorage.getItem('Community') === 'georgetown') return GeorgetownTodaysEvents
    return []
  }

  currentCommunityDays() {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockCalendarDays
    if (localStorage.getItem('Community') === 'georgetown') return GeorgetownCalendarDays
    return []
  }

  openDay(day: number) {
    this.selectedDay = day;

    this.selectedEvents = this.upcomingEvents.filter(
      e => new Date(e.date).getDate() === day
    );
  }

  closeModal() {
    this.selectedDay = null;
  }

}