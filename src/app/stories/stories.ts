import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { STORIES } from './story-data';

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

  filteredPosts() {
    if (!this.searchTerm) {
      return STORIES;
    }
    const search = this.searchTerm.toLowerCase();
    return STORIES.filter(post =>
      post.title.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
    );
  }

  goToStory(postId: string) {
    this.router.navigate(['/stories', postId]);
  }

}