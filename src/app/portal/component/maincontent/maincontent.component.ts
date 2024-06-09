import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css',
})
export class MaincontentComponent implements OnInit {
  tabs: string[] = ['Contenu Cours', 'Annonce', 'Reviews'];

  activatedIndex: number = 0;
  ngOnInit(): void {}
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }
}
