import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css',
})
export class CourseContentComponent implements OnInit {
  isChecked: boolean = false;
  toggleChecked() {
    this.isChecked = !this.isChecked;
  }
  ngOnInit(): void {}
}
