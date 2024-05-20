import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprenantRoutingModule } from './apprenant-routing.module';
import { ReactComponent } from './programs/react/react.component';
import { ProgramsComponent } from './programs/programs/programs.component';
import { PaymentComponent } from './programs/payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ReactComponent, ProgramsComponent, PaymentComponent, DashboardComponent],
  imports: [CommonModule, ApprenantRoutingModule],
})
export class ApprenantModule {}
