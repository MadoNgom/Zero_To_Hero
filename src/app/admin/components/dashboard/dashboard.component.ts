import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  tabs: string[] = ['Users', 'Formateurs', 'Apprenants', 'Admins'];
  ngOnInit(): void {}
  activatedIndex: number = 0;
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }
}
