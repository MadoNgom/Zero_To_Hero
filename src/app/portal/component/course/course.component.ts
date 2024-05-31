import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  tabs: string[] = ['Contenu Cours', 'Reviews', 'Annonce'];
  ngOnInit(): void {}
  activatedIndex: number = 0;
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }
}
