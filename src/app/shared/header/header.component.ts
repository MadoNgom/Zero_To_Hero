import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLogin: any;
  constructor(private authService: AuthService) {
    this.isLogin = this.authService.loggedIn();
  }
}
