import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ngClass, ngFor
import { FormsModule } from '@angular/forms';    // ngModel
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
    HttpClientModule   // for HTTP calls
  ],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  messageText: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  sendMessage() {
    const text = this.messageText.trim();
    if (!text) return;

    this.messages.push({ sender: 'user', text });
    this.messageText = '';
    this.loading = true;

    this.http.post<{ reply: string }>('http://localhost:3000/chat', { message: text })
      .subscribe({
        next: (res) => {
          this.messages.push({ sender: 'bot', text: res.reply });
          this.loading = false;
        },
        error: () => {
          this.messages.push({ sender: 'bot', text: 'Oops! Something went wrong.' });
          this.loading = false;
        }
      });
  }
}
