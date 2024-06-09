import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  loginForm!: FormGroup;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.storeJwtToken(res.token);
          this.authService.setCurruntUser(res.user);

          switch (res.user.type) {
            case 'Apprenant':
              this.router.navigate(['portal/dashboard']);
              break;
            case 'Administrateur':
              this.router.navigate(['admin/dashboard']);
              break;
            default:
              this.router.navigate(['admin/programe']);
              break;
          }
          // Handle successful login here
        },
        error: (err) => {
          console.error('Login Failed', err);
          // Handle login error here
        },
      });
    }
  }
}
