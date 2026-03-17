import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent } from '../resources/utils';
import { RoundRockUpcomingEvents, RoundRockTodaysEvents } from '../Round Rock/roundRockCalendar';

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
  selectedDay: number | null = null;
  selectedEvents: any[] = [];


  getDay(date: string): string {
    return new Date(date).getDate().toString();
  }
  getMonth(date: string): string {
    return new Date(date).toLocaleString('default', { month: 'short' });
  }

  currentUpcomingEvents(): CalendarEvent[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockUpcomingEvents
    return []
  }

  currentTodayEvents(): CalendarEvent[] {
    if (localStorage.getItem('Community') === 'roundrock') return RoundRockTodaysEvents
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