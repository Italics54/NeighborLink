import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrls: ['../sign-in/sign-in.css']
})
export class SignUpComponent {

  signUpForm: FormGroup;
  showSuccess = false;
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      community: ['', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  get name() { return this.signUpForm.get('name')!; }
  get email() { return this.signUpForm.get('email')!; }
  get password() { return this.signUpForm.get('password')!; }
  get confirmPassword() { return this.signUpForm.get('confirmPassword')!; }
  get community() { return this.signUpForm.get('community')!; }

  passwordsMatch(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;

    return pass === confirm ? null : { mismatch: true };
  }

  get passwordsMatchStatus(): 'match' | 'mismatch' | null {
    const pass = this.password.value;
    const confirm = this.confirmPassword.value;
    if (!confirm) return null;
    return pass === confirm ? 'match' : 'mismatch';
  }

  onSubmit(): void {

    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    } else {
      this.loading = true;
      this.errorMsg = '';

      const data = {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
        community: this.community.value
      };

      this.authService.signup(data).subscribe({
        next: () => {
          this.authService.login(this.email.value, this.password.value)
          this.loading = false;
          this.showSuccess = true;
        },
        error: err => {
          this.loading = false;
          this.errorMsg = err.error?.message || 'Signup failed';
          console.log(this.errorMsg)
        }
      });

    }


  }

  goToResources(): void {
    this.showSuccess = false;
    this.router.navigate(['/resources']);
  }
}