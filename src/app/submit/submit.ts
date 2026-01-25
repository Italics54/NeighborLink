import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit.html',
  styleUrl: './submit.css'
})
export class Submit {
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
  }
}
