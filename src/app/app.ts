import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ChatbotComponent } from './chatbot/chatbot';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Welcome } from "./welcome/welcome";
import { StartTour } from "./start-tour/start-tour";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    ChatbotComponent,
    CommonModule,
    FormsModule,
    Welcome,
    StartTour
],
  template: `
    <app-chatbot></app-chatbot>
    <app-start-tour></app-start-tour>

    <app-welcome></app-welcome>

    <app-header></app-header>
    
    <router-outlet></router-outlet>



    <app-footer></app-footer>
  `,
})
export class App implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
}