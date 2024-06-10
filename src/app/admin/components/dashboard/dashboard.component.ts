import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CourseService } from '../../../services/course.service'; // Import CourseService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  totalCourses: number = 0;
  totalTrainers: number = 0;
  tabs: string[] = ['Users', 'Formateurs', 'Apprenants', 'Admins'];
  activatedIndex: number = 0;

  constructor(private userService: UserService, private courseService: CourseService) {} // Inject CourseService

  ngOnInit(): void {
    this.userService.getUsersCount().subscribe({
      next: (data: { totalUsers: number }) => {
        this.totalUsers = data.totalUsers;
      },
      error: (err: any) => console.error(err)
    });

    this.courseService.getCoursesCount().subscribe({
      next: (data) => {
        this.totalCourses = data.totalCourses;
      },
      error: (err) => console.error('Error fetching course count:', err)
    });

    this.userService.getTrainersCount().subscribe({
      next: (data) => {
        this.totalTrainers = data.totalTrainers;
      },
      error: (err) => console.error('Error fetching trainer count:', err)
    });
  }

  changeTab(tabIndex: number): void {
    this.activatedIndex = tabIndex;
  }
}
