import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MENU_ITEMS, MenuItem } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  currentUser: any;
  menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurruntUser();
  }

  hasRole(roles?: string[]): boolean {
    return roles ? roles.includes(this.currentUser?.type) : true;
  }
  // TO LOGOUT THE PAGE
  handleItemClick(item: MenuItem): void {
    if (item.clickHandler === 'logout') {
      this.authService.logout();
    }
  }
}
