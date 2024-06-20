import { Component } from '@angular/core';
import { moduleData } from './data';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css',
})
export class ProjetComponent {
  data = moduleData;
}
