import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  showSuccess = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      community: ['', [Validators.required]] // <-- New field
    });

  }

  get email() { return this.signInForm.get('email')!; }
  get password() { return this.signInForm.get('password')!; }
  get community() { return this.signInForm.get('community')!; }


  onSubmit() {
    if (this.signInForm.valid) {
      this.showSuccess = true;

      // Navigate to dashboard after 1 second
      setTimeout(() => this.router.navigate(['/dashboard']), 1000);
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
