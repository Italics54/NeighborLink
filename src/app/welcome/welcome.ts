import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


interface OnboardingStep {
  title: string;
  text: string;
  media: string;
  type: 'gif' | 'video';
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
  imports: [CommonModule]
})

export class Welcome implements OnInit {

  @ViewChild('demoVideo') demoVideo!: ElementRef<HTMLVideoElement>;


  showModal = false;
  currentStep = 0;

  steps: OnboardingStep[] = [
    {
      title: 'Search Resources',
      text: 'Quickly find services and resources near you.',
      media: '/assets/onboarding/resources.mp4',
      type: 'video'
    },
    {
      title: 'Discover Events',
      text: 'Find local community events.',
      media: '/assets/onboarding/calendar.mp4',
      type: 'video'
    },
    {
      title: 'AI Recommendations',
      text: 'Get smart suggestions anf help from our Neighborly AI, NeighborBot.',
      media: '/assets/onboarding/chatbot.mp4',
      type: 'video'
    },  
    {
      title: 'Submit a Resource',
      text:  `Don't want to gatekeep? Submit a resource to help our people in your community`,
      media: '/assets/onboarding/submit.mp4',
      type: 'video'
    },
  ];

  ngOnInit(): void {
    const hasSeenIntro = localStorage.getItem('seenIntroModal');

    if (!hasSeenIntro) {
      this.showModal = true;
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;

      setTimeout(() => {
        this.demoVideo.nativeElement.load();
        this.demoVideo.nativeElement.play();
      });
    } else {
      this.closeModal();
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  closeModal(): void {
    this.showModal = false;
    localStorage.setItem('seenIntroModal', 'true');
  }

}