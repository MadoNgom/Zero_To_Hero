import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class isAdminGuard {
  canActivate: CanActivateFn = () => {
<<<<<<< HEAD
    if (this.authService.getCurruntUser().type != 'Administrateur') {
=======
    if (this.authService.getCurrentUser().type != 'Administrateur') {
>>>>>>> 7918d93 (fin du projet)
      this.router.navigate(['login']);
      return false;
    }
    return true;
  };
<<<<<<< HEAD
  
=======

>>>>>>> 7918d93 (fin du projet)

  constructor(private authService: AuthService, private router: Router) {}
}
