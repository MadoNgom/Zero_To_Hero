import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CourseComponent } from './component/course/course.component';
import { QuizzComponent } from './component/quizz/quizz.component';

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
        path: 'course',
        component: CourseComponent,
      },
      {
        path: 'quizz',
        component: QuizzComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
