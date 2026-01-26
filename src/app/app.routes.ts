import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resources } from './resources/resources';
import { Stories } from './stories/stories';
import { Calendar } from './calendar/calendar';
import { Submit } from './submit/submit';
import { SignInComponent } from './sign-in/sign-in';
import { BlogPostComponent } from './stories/blog-post/blog-post';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: Resources },
  { path: 'stories', component: Stories },
  { path: 'calendar', component: Calendar },
  { path: 'submit', component: Submit },
  { path: 'sign-in', component: SignInComponent },
  { path: 'stories/:id', component: BlogPostComponent },
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: '**', redirectTo: '/stories' }
];