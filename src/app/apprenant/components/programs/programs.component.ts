import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
})
export class ProgramsComponent implements OnInit {
  
  listeCourses!: Course[];

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courseService.getCourses().subscribe(data => {
      this.listeCourses = data;
      console.log(data);
    })
  }

}
