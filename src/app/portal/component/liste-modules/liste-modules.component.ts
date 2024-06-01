import { Component } from '@angular/core';
import { moduleData } from './data';
@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrl: './liste-modules.component.css',
})
export class ListeModulesComponent {
  data = moduleData;
}
