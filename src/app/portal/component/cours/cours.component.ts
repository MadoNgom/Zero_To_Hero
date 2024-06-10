import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css',
})
export class CoursComponent implements OnInit {
  listeCours?: Course[] = [];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.listeCours = data;
      console.log(data);
    });
  }
}
