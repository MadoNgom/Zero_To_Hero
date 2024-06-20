import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { TabsModule } from '../tabs/tabs.module';
import { TableFormateurComponent } from './components/table-formateur/table-formateur.component';
import { TableUserComponent } from './components/table-user/table-user.component';

import { CoursComponent } from './components/cours/cours.component';
import { TableApprenantComponent } from './components/table-apprenant/table-apprenant.component';
import { TableAdminComponent } from './components/table-admin/table-admin.component';
import { ProgrameComponent } from './components/programe/programe.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    CoursComponent,
    TableApprenantComponent,
    TableAdminComponent,
    ProgrameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    TabsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [SidebarComponent],
})
export class AdminModule {}
