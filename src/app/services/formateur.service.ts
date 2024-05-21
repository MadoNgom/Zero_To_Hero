import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../models/formateur.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private apiUrl = `${environment.apiUrl}/formateurs`; // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) { }

  addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(this.apiUrl, formateur);
  }

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.apiUrl);
  }

  getFormateurById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiUrl}/${id}`);
  }

  updateFormateur(id: number, formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiUrl}/${id}`, formateur);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}