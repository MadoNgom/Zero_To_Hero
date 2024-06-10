import { Component } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenu-cours',
  templateUrl: './contenu-cours.component.html',
  styleUrl: './contenu-cours.component.css',
})
export class ContenuCoursComponent {
  tabs: string[] = ['Contenu Cours', 'Reviews', 'Annonce'];

  activatedIndex: number = 0;
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }
}
