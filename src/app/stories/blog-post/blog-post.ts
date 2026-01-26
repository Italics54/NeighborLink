import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { STORIES, Story } from '../story-data';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.html',
  styleUrls: ['./blog-post.css'],
  imports: [CommonModule]
})
export class BlogPostComponent {
  post?: Story;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.post = STORIES.find(s => s.id === id);
      console.log('Loaded post:', this.post);
    }

  }

  goBack(): void {
    this.router.navigate(['/stories'])
  }
}
