import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { STORIES, Story } from './story-data';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.html',
  styleUrls: ['./stories.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class Stories implements OnInit {
  searchTerm: string = '';
  selectedCommunity: string = '';
  allPosts: Story[] = [];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selectedCommunity = this.getSelectedCommunity();
    this.allPosts = STORIES;
  }
  getSelectedCommunity(): string {
    const community = localStorage.getItem('Community');

    if (community === 'roundrock') return 'Round Rock';
    return 'Georgetown';
  }
  filteredPosts(): Story[] {
    return this.allPosts.filter(post =>
      post.community === this.selectedCommunity &&
      (
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
goToStory(id: string): void {
    this.router.navigate(['/stories', id]);
  }
}