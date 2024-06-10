import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Corrected import name from IUser to User
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users/signup', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(userId: string | undefined): Observable<any> {
    if (!userId) {
        throw new Error('User ID is undefined');
    }
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  getUsersCount(): Observable<{ totalUsers: number }> {
    return this.http.get<{ totalUsers: number }>(`${this.apiUrl}/count`);
  }

  getTrainersCount(): Observable<{ totalTrainers: number }> {
    return this.http.get<{ totalTrainers: number }>(`${this.apiUrl}/trainers/count`);
  }
}
