// cours.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  course: any = {};
  selectedFile: File | undefined;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.course.title);
    formData.append('description', this.course.description);
    formData.append('image', this.selectedFile as Blob, this.selectedFile?.name);
    // Append other course data to formData: duration, level, categorie, price, formateur, modules

    this.http.post<any>(`${environment.apiUrl}/courses`, formData).subscribe(
      response => {
        console.log('Course created successfully:', response);
        // Reset form or navigate to another page
      },
      error => {
        console.error('Error creating course:', error);
        // Handle error
      }
    );
  }
}
