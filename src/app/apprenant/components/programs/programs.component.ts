import { Component, OnInit } from '@angular/core';
import { courseData } from './course';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
})
export class ProgramsComponent implements OnInit {
  
  listeModules!: Module[];

  constructor(private moduleService: ModuleService) {

  }

  ngOnInit(): void {
    this.getModules();
  }

  getModules(): void {
    this.moduleService.getModules().subscribe(data => {
      this.listeModules = data;
      console.log(data);
    })
  }

}
