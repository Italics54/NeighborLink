import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
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
    if (this.signUpForm.valid) {
      this.showSuccess = true;

      this.authService.login(this.name.value);

    } else {
      this.signUpForm.markAllAsTouched();
    }
  }

  goToResources(): void {
    this.showSuccess = false;
    this.router.navigate(['/resources']);
  }
}