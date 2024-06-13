import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { InscriptionService } from '../../../services/inscription.service';
import { AuthService } from '../../../auth.service'; // Assuming you have an AuthService to get the logged-in user

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  course!: Course;
  idCourse!: string;
  paymentMode: string = '';

  constructor(
    private courseService: CourseService,
    private inscriptionService: InscriptionService,
    private authService: AuthService, // Assuming you have an AuthService to get the logged-in user
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['_id'];
      this.idCourse = id;
      this.courseService.getCourseById(id)
        .subscribe(course => this.course = course);
    });
  }

  selectPayment(mode: string): void {
    this.paymentMode = mode;
    console.log(this.paymentMode);
    this.createInscription();
  }

  createInscription(): void {
    const userId = this.authService.getCurruntUser(); // Assuming you have a method to get the logged-in user's ID
    const inscriptionData = {
      userId: userId,
      courseId: this.idCourse,
      paymentMode: this.paymentMode
    };

    this.inscriptionService.createInscription(inscriptionData).subscribe(
      response => {
        console.log('Inscription created successfully', response);
      },
      error => {
        console.error('Error creating inscription', error);
      }
    );
  }
}
