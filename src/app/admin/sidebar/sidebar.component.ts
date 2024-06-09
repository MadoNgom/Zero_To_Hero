import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  currentUser: any;
  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurruntUser();
  }
}
