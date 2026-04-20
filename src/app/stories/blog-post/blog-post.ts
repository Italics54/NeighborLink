import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { STORIES, Story } from '../story-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.html',
  styleUrls: ['./blog-post.css'],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class BlogPostComponent {
  post: Story | undefined;
  isCommentsOpen = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.post = STORIES.find(s => s.id === id);
      console.log('Loaded post:', this.post);
    }
  }
  newComment = '';
   addComment() {
   if (!this.newComment.trim() || !this.post) return;
   if (!this.post.comments) {
     this.post.comments = [];
    }
    this.post.comments.push({
      user: 'you',
      text: this.newComment
    });
    this.newComment = '';
}
  goBack(): void {
    this.router.navigate(['/stories'])
  }
  openComments() {
    this.isCommentsOpen = !this.isCommentsOpen;
  }
}