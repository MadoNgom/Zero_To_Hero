import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  canActivate: CanActivateFn = () => {
    if (!this.authService.getJwtToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  };

  constructor(private authService: AuthService, private router: Router) {}
}