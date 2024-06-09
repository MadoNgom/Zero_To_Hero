import { Component } from '@angular/core';

@Component({
  selector: 'app-programe',
  templateUrl: './programe.component.html',
  styleUrl: './programe.component.css',
})
export class ProgrameComponent {
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
