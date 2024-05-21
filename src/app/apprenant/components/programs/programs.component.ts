import { Component, OnInit } from '@angular/core';
import { courseData } from './course';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
})
export class ProgramsComponent implements OnInit {
  courses = courseData;
  ngOnInit(): void {}
}
