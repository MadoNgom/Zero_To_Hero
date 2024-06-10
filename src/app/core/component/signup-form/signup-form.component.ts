import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      iAgree: [false, Validators.requiredTrue],
      type: ['Apprenant']
    });
  }
  onSubmit() {
    console.log('Attempting to submit form', this.signupForm.value);
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe({

        next: (res) => {
          //this.signupForm.value = null;
          this.router.navigate(['login']);
        },
        error: (err) => console.error('Signup Failed', err)
      });
    } else {
      console.error('Form is invalid', this.signupForm.errors);
    }
  }
} 