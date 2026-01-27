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

  category: string | null = null;
  selectedCard: any = null;



  resourcesCards: ResourceCard[] = [
    {
      id: 1,
      title: "Harmony House Kitchen",
      description: "Swing by for a warm plate and a friendly chat. No questions asked, just good food and better company.",
      address: "442 Westview Terrace",
      hours: "Daily: 12pm – 8pm",
      phone: "(555) 123-4567",
      tags: ["Open to all", "Walk-ins"],
      category: "food"
    },
    {
      id: 2,
      title: "Community Health Clinic",
      description: "Keeping the neighborhood healthy without breaking the bank. From flu shots to quick checkups, we've got your back.",
      address: "89 High Street",
      hours: "Mon – Thu: 8am – 4pm",
      phone: "(555) 987-6543",
      tags: ["Low-cost", "Wellness"],
      category: "health"
    },
    {
      id: 3,
      title: "Harmony School of Endeavor",
      description: "Level up your skills with our evening workshops. It’s never too late to learn something new or pivot your career!",
      address: "15 Skyline Blvd",
      hours: "Tue & Thu: 6pm – 9pm",
      phone: "(555) 246-8101",
      tags: ["Upskilling", "Evening classes"],
      category: "education"
    },
    {
      id: 4,
      title: "Eastside Recreation Center",
      description: "The ultimate hangout spot. Shoot some hoops, join a hobby club, or just chill in a safe space after school.",
      address: "1200 Bayside Drive",
      hours: "9am – 10pm",
      phone: "(555) 135-7913",
      tags: ["All ages", "Active"],
      category: "parks"
    },
    {
      id: 5,
      title: "Hope Shelter",
      description: "A safe harbor when things get tough. We offer a comfy bed and a fresh start for you and your family.",
      address: "33 North Pier",
      hours: "Open 24/7",
      phone: "(555) 864-2097",
      tags: ["Safe Space", "Housing"],
      category: "health"
    },
    {
      id: 6,
      title: "Harmony Sharehouse Market",
      description: "Think of us as your neighborhood pantry. Grab some fresh groceries and keep the kitchen stocked for the week.",
      address: "505 Willow Way",
      hours: "Sat: 8am – 1pm",
      phone: "(555) 777-8888",
      tags: ["Fresh Finds", "Local"],
      category: "store"
    },
    {
      id: 7,
      title: "The Neighborhood",
      description: "A pop-up market vibe where the community shares what they have. Perfect for your weekly fridge refill.",
      address: "221 Baker Lane",
      hours: "Sun: 10am – 2pm",
      phone: "(555) 444-3333",
      tags: ["Community First", "Groceries"],
      category: "store"
    },
    {
      id: 8,
      title: "Harmony Point Whole Health",
      description: "Feeling overwhelmed? Come talk it out. Our counselors offer a judge-free zone to help you find your balance.",
      address: "99 Juniper Court",
      hours: "Mon – Fri: 11am – 8pm",
      phone: "(555) 555-0199",
      tags: ["Wellness", "Support"],
      category: "health"
    },
    {
      id: 9,
      title: "Harmony School of Innovation",
      description: "Where the tech-heads and creators meet. Come play with new gadgets and learn how to build the future.",
      address: "11 Tech Plaza",
      hours: "Weekdays: 9am – 6pm",
      phone: "(555) 321-4321",
      tags: ["Tech-focused", "Creative"],
      category: "education"
    },
    {
      id: 10,
      title: "Heritage Park",
      description: "The best spot in town for a weekend picnic or a massive soccer game under the sun. Bring the dog!",
      address: "700 Wildflower Lane",
      hours: "Dawn – 10pm",
      phone: "(555) 800-PARK",
      tags: ["Dog friendly", "Outdoors"],
      category: "parks"
    },
    {
      id: 11,
      title: "Commons Park",
      description: "Sand-volleyball, basketball, and plenty of space to just soak up the vibes. Bring a ball and a friend!",
      address: "18 Riverside Drive",
      hours: "6am – 11pm",
      phone: "(555) 900-PLAY",
      tags: ["Sports", "Late Night"],
      category: "parks"
    },
    {
      id: 12,
      title: "Harmony Bistro",
      description: "A cozy little nook serving up hearty, free meals for the soul. Come hungry, leave happy.",
      address: "1900 Sunset Road",
      hours: "Daily: 4pm – 9pm",
      phone: "(555) 555-4321",
      tags: ["Soul Food", "No Cost"],
      category: "food"
    },
    {
      id: 13,
      title: "Harmony School of Excellence",
      description: "A bright space for kiddos to find their spark. We focus on big dreams, creative thinking, and kindness.",
      address: "55 Education Drive",
      hours: "7:30am – 4:30pm",
      phone: "(555) 678-9012",
      tags: ["Growth Mindset", "Youth"],
      category: "education"
    }
  ]

  filteredResources() {
    if (!this.category) {
      return this.resourcesCards;
    }
    const search = this.category.toLowerCase();
    return this.resourcesCards.filter(card =>
      card.category.toLowerCase() === (search)
    );
  }

  amountOfCategory(category: string) {
    return this.resourcesCards.filter(card => card.category === category).length
  }

  clearFilters() {
    this.category = null;
  }

  openModal(card: any) {
    this.selectedCard = card;
  }

  closeModal() {
    this.selectedCard = null;
  }
}
