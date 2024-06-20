import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';

import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { FormComponent } from './component/form/form.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { PricingComponent } from './component/pricing/pricing.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    TestimonialComponent,
    FormComponent,
    SignupFormComponent,
    PricingComponent,
  ],
  imports: [CommonModule, SharedModule, BrowserModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class CoreModule {}