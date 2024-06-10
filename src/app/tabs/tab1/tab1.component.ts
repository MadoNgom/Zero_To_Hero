import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css',
})
export class Tab1Component {
  isChecked: boolean = false;
  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  course!: Course;
  idCourse!: string;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['_id'];
      this.courseService
        .getCourseById(id)
        .subscribe((course) => (this.course = course));
    });

    console.log(this.course.description);
  }
}
