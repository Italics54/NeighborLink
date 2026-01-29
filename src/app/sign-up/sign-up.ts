import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './sign-up.html',
  styleUrls: ['../sign-in/sign-in.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  showSuccess = false;
  errorMsg = '';
  loading = false;

  restrictedCommunities = ['georgetown', 'austin'];
  communityWarning = '';

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

  ngOnInit(): void {
    this.community.valueChanges.subscribe(value => {
      if (this.restrictedCommunities.includes(value)) {
        this.communityWarning =
          `This community's resources are online  yet. Please await our message for a new community welcome. Any questions contact our office for assistance`;

        this.community.setErrors({ restricted: true });
      } else {
        this.communityWarning = '';
        this.community.setErrors(null);
      }
    });
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
    }

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
        this.authService.login(this.email.value, this.password.value);
        this.loading = false;
        this.showSuccess = true;
      },
      error: err => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Signup failed';
      }
    });
  }

  goToResources(): void {
    this.showSuccess = false;
    this.router.navigate(['/resources']);
  }
}