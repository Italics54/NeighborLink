import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ChatbotComponent } from './chatbot/chatbot';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    ChatbotComponent,
    CommonModule,
    FormsModule
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>

    <app-chatbot></app-chatbot>

    <app-footer></app-footer>
  `,
})
export class App {}
