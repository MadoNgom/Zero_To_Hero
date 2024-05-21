import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [
    SignupComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule { }
