import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrl: './detail-course.component.css'
})
export class DetailCourseComponent implements OnInit {

  course! : Course;
  idCourse! : string;

  constructor(
    private courseService : CourseService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['_id'];
      this.courseService.getCourseById(id)
        .subscribe(course => this.course = course);
    });

    console.log(this.course.description);
  }



}
