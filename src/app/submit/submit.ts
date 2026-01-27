import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './submit.html',
  styleUrl: './submit.css'
})
export class Submit {

  submitted = false;
  resourceForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      contact: ['', Validators.required],
      description: ['', Validators.required],
      reason: ['']
    });
  }

  onSubmit() {
    if (this.resourceForm.invalid) {
      this.resourceForm.markAllAsTouched();
      return;
    }

    console.log(this.resourceForm.value);

    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.resourceForm.reset();
  }

  get name() { return this.resourceForm.get('name')!; }
  get category() { return this.resourceForm.get('category')!; }
  get location() { return this.resourceForm.get('location')!; }
  get contact() { return this.resourceForm.get('contact')!; }
  get description() { return this.resourceForm.get('description')!; }
}
