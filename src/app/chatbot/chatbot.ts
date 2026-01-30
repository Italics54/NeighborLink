import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule  // for HTTP calls
  ],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  messageText = '';
  loading = false;

  isChatOpen = false;

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    const text = this.messageText.trim();
    if (!text) return;

    this.messages.push({ sender: 'user', text });
    this.messageText = '';
    this.loading = true;

    this.http.post<{ reply: string }>(
      '/api/chat',
      { message: text }
    ).subscribe({
      next: (res) => {
        this.messages.push({ sender: 'bot', text: res.reply });
        this.loading = false;
      },
      error: () => {
        this.messages.push({
          sender: 'bot',
          text: 'Oops! Something went wrong.'
        });
        this.loading = false;
      }
    });
  }
}
