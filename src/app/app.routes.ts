import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resources } from './resources/resources';
import { Stories } from './stories/stories';
import { Calendar } from './calendar/calendar';
import { Submit } from './submit/submit';
import { BlogA } from './blog_posts/blog-A/blog-A';
import { BlogB } from './blog_posts/blog-B/blog-B';
import { BlogC } from './blog_posts/blog-C/blog-C';
import { BlogD } from './blog_posts/blog-D/blog-D';
import { BlogE } from './blog_posts/blog-E/blog-E';
import { BlogF } from './blog_posts/blog-F/blog-F';
import { BlogG } from './blog_posts/blog-G/blog-G';
import { BlogH } from './blog_posts/blog-H/blog-H';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: Resources },
  { path: 'stories', component: Stories },
  { path: 'calendar', component: Calendar },
  { path: 'submit', component: Submit },
  { path: 'blog-A', component: BlogA },
  { path: 'blog-B', component: BlogB },
  { path: 'blog-C', component: BlogC },
  { path: 'blog-D', component: BlogD },
  { path: 'blog-E', component: BlogE },
  { path: 'blog-F', component: BlogF },
  { path: 'blog-G', component: BlogG },
  { path: 'blog-H', component: BlogH }
];
  