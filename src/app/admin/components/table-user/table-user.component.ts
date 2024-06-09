import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Loaded users:', data);  // Added this log to check the data
        this.users = data;
      },
      error: (error) => {
        console.error('Error loading users', error);
      }
    });
  }

  editUser(user: User): void {
    // Logique pour éditer l'utilisateur
    // Cela pourrait inclure la navigation vers un formulaire d'édition avec les données de l'utilisateur
    console.log('Editing user:', user);
  }

  deleteUser(userId: string): void {
    if (!userId) {
      console.error('User ID is undefined');
      return;
    }
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.users = this.users.filter(user => user._id !== userId);
        console.log('User deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting user', error);
      }
    });
  }
}

