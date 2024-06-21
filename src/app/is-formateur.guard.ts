import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class isFormateurGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getCurruntUser();
    if (!user || user.type !== 'Formateur') {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
