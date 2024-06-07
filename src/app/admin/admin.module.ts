import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { TabsModule } from '../tabs/tabs.module';
import { TableFormateurComponent } from './components/table-formateur/table-formateur.component';
import { TableUserComponent } from './components/table-user/table-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddFormateurComponent,
    ManageUsersComponent,
    SettingsComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    TableFormateurComponent,
    TableUserComponent,
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule, TabsModule],
})
export class AdminModule {}
