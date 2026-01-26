import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css'
})
export class Stories {
  searchTerm: string = '';
  constructor(private router: Router) {}

  posts = [
    {
      id: 1,
      title: 'The Mural Project',
      category: 'Culture',
      description: 'Local artists transformed the downtown underpass into a vibrant timeline of our community history, celebrating our diverse heritage.'
    },
    {
      id: 2,
      title: 'Digital Literacy for All',
      category: 'Education',
      description: 'Our library launched a new series of free workshops, helping over 200 residents master essential software and online security tools.'
    },
    {
      id: 3,
      title: 'Riverbank Restoration',
      category: 'Environment',
      description: 'Volunteers removed three tons of debris from the Oakwood River, successfully reintroducing native aquatic plants to the ecosystem.'
    },
    {
      id: 4,
      title: 'Mindfulness in the Park',
      category: 'Wellness',
      description: 'The weekly Saturday morning meditation sessions have grown to 50 participants, fostering mental health and community connection.'
    },
    {
      id: 5,
      title: 'Zero-Waste Market Success',
      category: 'Sustainability',
      description: 'The first quarterly zero-waste market prevented an estimated 1,200 single-use plastics from entering our local landfill.'
    },
    {
      id: 6,  
      title: 'The Folk Music Festival',
      category: 'Culture',
      description: 'Bringing together musicians from three neighboring counties, the festival raised $5,000 for the community arts fund.'
    },
    {
      id: 7,
      title: 'Future Farmers Program',
      category: 'Education',
      description: 'High school students are now managing a hydroponic farm, providing fresh greens to the school cafeteria every single day.'
    },
    {
      id: 8,
      title: 'Urban Bee Sanctuary',
      category: 'Environment',
      description: 'Six new rooftop bee colonies were established this spring, helping to pollinate community gardens across the northern district.'
    }
  ];

  filteredPosts() {
    if (!this.searchTerm) {
      return this.posts;
    }
    const search = this.searchTerm.toLowerCase();
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
    );
  }

}