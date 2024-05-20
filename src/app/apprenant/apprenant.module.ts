import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprenantRoutingModule } from './apprenant-routing.module';
import { ReactComponent } from './components/react/react.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ReactComponent, ProgramsComponent, PaymentComponent],
  imports: [CommonModule, ApprenantRoutingModule, SharedModule, CoreModule],
})
export class ApprenantModule {}
