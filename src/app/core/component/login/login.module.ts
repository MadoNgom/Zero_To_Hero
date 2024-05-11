import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormLoginComponent } from './form/form-login.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
