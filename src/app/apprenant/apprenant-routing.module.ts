import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from './programs/react/react.component';
import { ProgramsComponent } from './programs/programs/programs.component';
import { PaymentComponent } from './programs/payment/payment.component';

const routes: Routes = [
  { path: '', component: ProgramsComponent },
  { path: 'react', component: ReactComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantRoutingModule {}
