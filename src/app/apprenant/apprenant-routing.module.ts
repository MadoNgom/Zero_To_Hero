import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: ProgramsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'react', component: ReactComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantRoutingModule {}
