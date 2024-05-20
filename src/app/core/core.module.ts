import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
  ],
  exports: [HomeComponent],
  imports: [CommonModule, SharedModule, BrowserModule],
})
export class CoreModule {}
