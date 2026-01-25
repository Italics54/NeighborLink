import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  getDay(date: string): string {
    return new Date(date).getDate().toString();
  }
  getMonth(date: string): string {
    return new Date(date).toLocaleString('default', { month: 'short' });
  }


  upcomingEvents = [
    {
      title: 'Community Potluck Dinner',
      date: 'January 25, 2067',
      time: '5:00 PM',
      category: 'Gathering'
    },
    {
      title: 'Coffee & Conversation',
      date: 'January 26, 2067',
      time: '9:00 AM',
      category: 'Social'
    },
    {
      title: 'Kids Art & Craft Hour',
      date: 'January 27, 2067',
      time: '3:00 PM',
      category: 'Family'
    }
  ];

  selectedDay: number | null = null;
  selectedEvents: any[] = [];

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
