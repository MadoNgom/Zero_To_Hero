import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class isApprenantGuard {
  canActivate: CanActivateFn = () => {
    if (this.authService.getCurruntUser().type != 'Apprenant') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  };


  constructor(private authService: AuthService, private router: Router) {}
}
