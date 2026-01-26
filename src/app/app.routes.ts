import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resources } from './resources/resources';
import { Stories } from './stories/stories';
import { Calendar } from './calendar/calendar';
import { Submit } from './submit/submit';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: Resources },
  { path: 'stories', component: Stories },
  { path: 'calendar', component: Calendar },
  { path: 'submit', component: Submit },
];
  