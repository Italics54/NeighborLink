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
      date: 'February 7, 2026',
      time: '5:00 PM',
      category: 'Gathering',
      location: 'Harmony House Kitchen'
    },
    {
      title: 'Coffee & Conversation',
      date: 'February 16, 2026',
      time: '9:00 AM',
      category: 'Social',
      location: 'Unity Grove Park'
    },
    {
      title: 'Kids Art & Craft Hour',
      date: 'February 19, 2026',
      time: '3:00 PM',
      category: 'Family',
      location: 'Harmony Public Library'
    },
    {
      title: 'Empty Plate Benefit Lunch',
      date: 'February 25, 2026',
      time: '3:00 PM',
      category: 'Food Bank Event',
      location: 'Hope Shelter'
    }
  ];

  todaysEvents = [
    {
      title: 'Volunteer Shift: Farmers Market',
      date: 'February 14, 2026',
      time: '8:00 AM',
      category: 'Volunteering',
      location: 'Downtown Square - Farmers Markets'
    },
    {
      title: 'Library Reading Time',
      date: 'February 10, 2026',
      time: '10:30 AM',
      category: 'Education',
      location: 'Public Library - Children’s Corner'
    },
    {
      title: 'Pickup Soccer',
      date: 'February 21, 2026',
      time: '2:00 PM',
      category: 'Recreation',
      location: 'Heritage Park - North Soccer Field'
    },
    {
      title: 'Pickup Basketball',
      date: 'February 3, 2026',
      time: '6:00 PM',
      category: 'Recreation',
      location: 'Eastside Recreation Center- West Court'
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