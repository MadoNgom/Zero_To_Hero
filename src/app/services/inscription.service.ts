import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://localhost:3000/inscriptions'; 

  constructor(private http: HttpClient) { }

  getInscriptions(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Inscription[]>('getInscriptions', []))
      );
  }

  getInscriptionById(id: string): Observable<Inscription> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inscription>(url)
      .pipe(
        catchError(this.handleError<Inscription>(`getInscriptionById id=${id}`, null))
      );
  }

  createInscription(inscriptionData: { userId: string; courseId: string; paymentMode: string }): Observable<Inscription> {
    return this.http.post<Inscription>(this.apiUrl, inscriptionData)
      .pipe(
        catchError(this.handleError<Inscription>('createInscription'))
      );
  }

  deleteInscription(id: string): Observable<Inscription> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Inscription>(url)
      .pipe(
        catchError(this.handleError<Inscription>('deleteInscription'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T | null) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Log to console or send to logging infrastructure
      return of(result as T);
    };
  }
}
