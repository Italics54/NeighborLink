import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resources } from './resources/resources';
import { Stories } from './stories/stories';
import { Calender } from './calender/calender';
import { Submit } from './submit/submit';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: Resources },
  { path: 'stories', component: Stories },
  { path: 'calender', component: Calender },
  { path: 'submit', component: Submit },
];
