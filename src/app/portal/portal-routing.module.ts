import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CoursComponent } from './component/cours/cours.component';
import { ContenuCoursComponent } from './component/contenu-cours/contenu-cours.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProjetComponent } from './component/projet/projet.component';
import { Projet1Component } from './component/projet1/projet1.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'cours',
        component: CoursComponent,
      },
      {
        path: 'cours/:_id',
        component: ContenuCoursComponent,
      },

      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'projet',
        component: ProjetComponent,
      },
      {
        path: 'projet1',
        component: Projet1Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
