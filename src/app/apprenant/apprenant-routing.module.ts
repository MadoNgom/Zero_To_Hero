import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: 'dashboard', component: ProgramsComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  { path: 'react', component: ReactComponent },
  { path: 'programs/:_id', component: DetailCourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantRoutingModule {}
