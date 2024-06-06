import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    AddFormateurComponent,
    ManageUsersComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
