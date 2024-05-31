import { Component } from '@angular/core';
import { moduleData } from './moduleData';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css',
})
export class CoursComponent {
  moduleData = moduleData;
}
