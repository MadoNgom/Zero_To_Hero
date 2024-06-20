import { Component } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  course: any;
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
