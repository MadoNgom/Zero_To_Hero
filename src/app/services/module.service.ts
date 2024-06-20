import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../models/module.model'; // Assuming there is a Module model similar to User and Formateur
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = `${environment.apiUrl}/modules`; // Assuming the endpoint is 'modules'

  constructor(private http: HttpClient) { }

  addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(this.apiUrl, module);
  }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.apiUrl);
  }

  getModuleById(id: string): Observable<Module> {
    return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }

  updateModule(id: string, module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/${id}`, module);
  }

  deleteModule(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
