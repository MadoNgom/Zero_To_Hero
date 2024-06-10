import { Component, Input } from '@angular/core';
import { moduleData } from './data';
import { Module } from '../../../models/module.model';

@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrl: './liste-modules.component.css',
})
export class ListeModulesComponent {
  // data = moduleData;
  @Input() data: Module[] | undefined;
}
