import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdminComponent } from './admin.component';

import { CoursComponent } from './components/cours/cours.component';
import { ProgrameComponent } from './components/programe/programe.component';
import { isAdminGuard } from '../is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [isAdminGuard],
      },
      {
        path: 'add-formateur',
        component: AddFormateurComponent,
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'cours',
        component: CoursComponent,
      },
      {
        path: 'programe',
        component: ProgrameComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
