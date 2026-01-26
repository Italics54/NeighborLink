import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceCard } from './utils'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-resources',
  standalone: true,
  templateUrl: './resources.html',
  styleUrls: ['./resources.css'],
  imports: [CommonModule, FormsModule]
})

export class Resources {

  category: string = '';

  resourcesCards: ResourceCard[] = [
    {
      id: 1,
      title: "Sunrise Soup Kitchen",
      description: "Hot meals served daily for anyone in need.",
      address: "78 Pine Street",
      hours: "Daily: 11am – 2pm",
      phone: "(555) 555-1010",
      tags: ["Free meals"],
      category: "food",
    },
    {
      id: 2,
      title: "Community Health Clinic",
      description: "Low-cost checkups, vaccines, and prescriptions.",
      address: "22 River Road",
      hours: "Mon – Fri: 9am – 6pm",
      phone: "(555) 222-1111",
      tags: ["Sliding scale"],
      category: "health",
    },
    {
      id: 3,
      title: "Adult Learning Center",
      description: "Free GED classes and job training workshops.",
      address: "310 Cedar Ave",
      hours: "Evenings & weekends",
      phone: "(555) 777-9090",
      tags: ["Registration required"],
      category: "education",
    },
    {
      id: 4,
      title: "Eastside Recreation Center",
      description: "Gym, youth programs, and after-school activities.",
      address: "900 Maple Lane",
      hours: "8am – 9pm",
      phone: "(555) 333-2222",
      tags: ["Youth friendly"],
      category: "parks",
    },
    {
  id: 5,
  title: "Hope Shelter",
  description: "Temporary housing and support services for individuals and families.",
  address: "145 Harbor Way",
  hours: "24/7",
  phone: "(555) 444-6789",
  tags: ["Emergency shelter"],
  category: "housing",
},
{
  id: 6,
  title: "Fresh Start Food Pantry",
  description: "Weekly grocery distribution for local residents.",
  address: "60 Elm Street",
  hours: "Tues & Thurs: 10am – 3pm",
  phone: "(555) 888-1212",
  tags: ["ID required"],
  category: "food",
},
{
  id: 7,
  title: "Wellness Counseling Center",
  description: "Mental health counseling with affordable payment options.",
  address: "415 Birch Blvd",
  hours: "Mon – Sat: 10am – 7pm",
  phone: "(555) 666-4545",
  tags: ["Appointment needed"],
  category: "health",
},
{
  id: 8,
  title: "City Job Assistance Office",
  description: "Resume help, job listings, and interview preparation.",
  address: "200 Market Street",
  hours: "Mon – Fri: 8:30am – 5pm",
  phone: "(555) 999-3030",
  tags: ["Walk-ins welcome"],
  category: "education",
},
{
  id: 9,
  title: "Northside Community Park",
  description: "Open green space with playgrounds and walking trails.",
  address: "12 Oak Drive",
  hours: "Sunrise – Sunset",
  phone: "(555) 111-7878",
  tags: ["Outdoor activities"],
  category: "parks",
},

  ];

  filteredResources() {
    if (!this.category) {
      return this.resourcesCards;
    }
    const search = this.category.toLowerCase();
    return this.resourcesCards.filter(card =>
      card.category.toLowerCase() === (search)
    );
  }

  amountOfCategory (category: string) {
    return this.resourcesCards.filter(card => card.category === category).length
  }
}
