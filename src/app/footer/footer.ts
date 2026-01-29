import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  selectedEmail = 'hello@neighborlink.com';
  emailSubject = 'Hello!';
  emailBody = '';


  getGmailComposeUrl(to: string, subject: string, body: string): string {
    const encodedTo = encodeURIComponent(to);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;
  }

  openGmail() {
    const url = this.getGmailComposeUrl(
      this.selectedEmail,
      this.emailSubject,
      this.emailBody
    );
    window.open(url, '_blank');
  }

}
