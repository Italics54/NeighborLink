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

    /* =================================================
      🍽 FOOD
    ================================================= */

    {
      id: 1,
      title: "Harmony House Kitchen",
      subtitle: "Free community meals",
      specialty: "Meal service",
      description: "Swing by for a warm plate and a friendly chat.",
      fullDescription:
        "Harmony House Kitchen provides hot, nutritious meals daily in a welcoming, no-questions-asked environment where everyone is welcome.",

      address: "442 Westview Terrace",
      hours: "Daily: 12pm – 8pm",
      phone: "(555) 123-4567",
      tags: ["Open to all", "Walk-ins"],
      category: "food",
      image: "assets/resources_pictures/harmony-kitchen.png"
    },

    {
      id: 12,
      title: "Harmony Bistro",
      subtitle: "Free evening meals",
      specialty: "Community dining",
      description: "Come hungry, leave happy.",
      fullDescription:
        "A cozy café-style space serving hot, homemade dinners every evening. Volunteers and neighbors gather for food and connection.",

      address: "1900 Sunset Road",
      hours: "Daily: 4pm – 9pm",
      phone: "(555) 555-4321",
      tags: ["Soul Food", "No Cost"],
      category: "food",
      image: "assets/resources_pictures/bistro.jpg"
    },


    /* =================================================
      🏪 STORE / MARKETS
    ================================================= */

    {
      id: 6,
      title: "Harmony Sharehouse Market",
      subtitle: "Fresh grocery pantry",
      specialty: "Groceries",
      description: "Your neighborhood pantry with fresh groceries.",
      fullDescription:
        "Residents can pick up produce, canned goods, and staples weekly. Volunteers help ensure everyone leaves with enough food for their household.",

      address: "505 Willow Way",
      hours: "Sat: 8am – 1pm",
      phone: "(555) 777-8888",
      tags: ["Fresh Finds", "Local"],
      category: "store",
      image: "assets/resources_pictures/market.jpg"
    },

    {
      id: 7,
      title: "The Neighborhood Market",
      subtitle: "Community pop-up pantry",
      specialty: "Food share",
      description: "A pop-up market vibe where the community shares what they have.",
      fullDescription:
        "Local donations power this friendly Sunday market, providing groceries and essentials while strengthening neighbor-to-neighbor support.",

      address: "221 Baker Lane",
      hours: "Sun: 10am – 2pm",
      phone: "(555) 444-3333",
      tags: ["Community First", "Groceries"],
      category: "store",
      image: "assets/resources_pictures/popmarket.jpg"
    },


    /* =================================================
      ❤️ HEALTH
    ================================================= */

    {
      id: 2,
      title: "Community Health Clinic",
      subtitle: "Affordable primary care",
      specialty: "Healthcare",
      description: "Keeping the neighborhood healthy without breaking the bank.",
      fullDescription:
        "From checkups and flu shots to preventative care, our clinic offers affordable services for families and individuals.",

      address: "89 High Street",
      hours: "Mon – Thu: 8am – 4pm",
      phone: "(555) 987-6543",
      tags: ["Low-cost", "Wellness"],
      category: "health",
      image: "assets/resources_pictures/health-clinic.jpg"
    },

    {
      id: 5,
      title: "Hope Shelter",
      subtitle: "Emergency housing support",
      specialty: "Housing",
      description: "A safe harbor when things get tough.",
      fullDescription:
        "Hope Shelter offers temporary housing, case management, and essential services to help families regain stability.",

      address: "1099 E Main St",
      hours: "Open 24/7",
      phone: "(555) 864-2097",
      tags: ["Safe Space", "Housing"],
      category: "health",
      image: "assets/resources_pictures/shelter.jpg"
    },

    {
      id: 8,
      title: "Harmony Point Whole Health",
      subtitle: "Mental wellness counseling",
      specialty: "Counseling",
      description: "Feeling overwhelmed? Come talk it out.",
      fullDescription:
        "Licensed counselors offer individual and group sessions in a safe, judgment-free environment to support mental wellness.",

      address: "99 Juniper Court",
      hours: "Mon – Fri: 11am – 8pm",
      phone: "(555) 555-0199",
      tags: ["Wellness", "Support"],
      category: "health",
      image: "assets/resources_pictures/counseling.jpg"
    },


    /* =================================================
      🎓 EDUCATION (Elementary → Middle → High)
    ================================================= */

    {
      id: 3,
      title: "Harmony School of Endeavor",
      subtitle: "Elementary School",
      specialty: "Elementary education",
      description: "A nurturing start for young learners.",
      fullDescription:
        "Serving grades K–5, Endeavor focuses on foundational learning, creativity, and building confidence in a safe and supportive environment.",

      address: "15 Skyline Blvd",
      hours: "7:30am – 3pm",
      phone: "(555) 246-8101",
      tags: ["K–5", "After-school care"],
      category: "education",
      image: "assets/resources_pictures/elementary.jpg"
    },

    {
      id: 13,
      title: "Harmony School of Excellence",
      subtitle: "Middle School",
      specialty: "Middle school education",
      description: "Helping students grow academically and socially.",
      fullDescription:
        "Grades 6–8 programs focused on leadership, teamwork, and preparing students for high school success.",

      address: "55 Education Drive",
      hours: "7:30am – 4:30pm",
      phone: "(555) 678-9012",
      tags: ["6–8", "Clubs", "Sports"],
      category: "education",
      image: "assets/resources_pictures/middle-school.jpg"
    },

    {
      id: 9,
      title: "Harmony School of Innovation",
      subtitle: "High School",
      specialty: "High school & technology pathways",
      description: "Where the tech-heads and creators meet.",
      fullDescription:
        "A grades 9–12 high school featuring technology labs, coding courses, and career pathways to prepare students for college or the workforce.",

      address: "11 Tech Plaza",
      hours: "Weekdays: 9am – 6pm",
      phone: "(555) 321-4321",
      tags: ["9–12", "Tech-focused", "Career prep"],
      category: "education",
      image: "assets/resources_pictures/high-school.jpg"
    },


    /* =================================================
      🌳 PARKS & REC
    ================================================= */

    {
      id: 4,
      title: "Eastside Recreation Center",
      subtitle: "After-school safe space",
      specialty: "Recreation",
      description: "Sports, clubs, and community programs.",
      fullDescription:
        "Basketball courts, fitness classes, art programs, and youth clubs provide a safe and active environment for all ages.",

      address: "1200 Bayside Drive",
      hours: "9am – 10pm",
      phone: "(555) 135-7913",
      tags: ["All ages", "Active"],
      category: "parks",
      image: "assets/resources_pictures/recreation.jpg"
    },

    {
      id: 10,
      title: "Heritage Park",
      subtitle: "Outdoor recreation space",
      specialty: "Park",
      description: "Perfect for picnics and soccer games.",
      fullDescription:
        "Open green fields, walking trails, and playgrounds make Heritage Park a favorite family gathering spot.",

      address: "700 Wildflower Lane",
      hours: "Dawn – 10pm",
      phone: "(555) 800-PARK",
      tags: ["Dog friendly", "Outdoors"],
      category: "parks",
      image: "assets/resources_pictures/park1.jpg"
    },

    {
      id: 11,
      title: "Commons Park",
      subtitle: "Sports & activity park",
      specialty: "Sports",
      description: "Sand volleyball and late-night courts.",
      fullDescription:
        "Basketball courts, volleyball pits, and open space for pick-up games make this park lively day and night.",

      address: "18 Riverside Drive",
      hours: "6am – 11pm",
      phone: "(555) 900-PLAY",
      tags: ["Sports", "Late Night"],
      category: "parks",
      image: "assets/resources_pictures/park2.jpg"
    }
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
