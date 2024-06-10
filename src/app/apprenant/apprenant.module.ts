import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ApprenantRoutingModule } from './apprenant-routing.module';
import { ReactComponent } from './components/react/react.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr)

@NgModule({
  declarations: [ReactComponent, ProgramsComponent, PaymentComponent, DetailCourseComponent],
  imports: [CommonModule, ApprenantRoutingModule, SharedModule, CoreModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class ApprenantModule {}
