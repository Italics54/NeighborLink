import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  showSuccess = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() { return this.signInForm.get('email')!; }
  get password() { return this.signInForm.get('password')!; }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.showSuccess = true;

      this.authService.login(this.email.value);

    } else {
      this.signInForm.markAllAsTouched();
    }
  }

  goToResources(): void {
    this.showSuccess = false;
    this.router.navigate(['/resources']);
  }
}
