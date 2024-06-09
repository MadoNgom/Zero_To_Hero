import { Component } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrl: './module1.component.css',
})
export class Module1Component {
  tabs: string[] = ['Contenu Cours', 'Reviews', 'Annonce'];
  ngOnInit(): void {}
  activatedIndex: number = 0;
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }
}
