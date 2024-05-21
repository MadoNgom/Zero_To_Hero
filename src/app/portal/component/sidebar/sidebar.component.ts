import { Component } from '@angular/core';
import { sideBarData } from './sidebarData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  hideSideBar = false;
  sideBarData = sideBarData;
}
