import { Component } from '@angular/core';
import { sideBarData } from './sidebarData';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  hideSideBar = false;
  sideBarData = sideBarData;

  constructor(private authService: AuthService) {}

  onItemClick(item: any) {
    if (item.routeName === 'logout') {
      this.authService.logout();
    } else {
      // Handle other navigation if needed
    }
  }
}
