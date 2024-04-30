import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial.component';
import { SubContainerComponent } from './sub-container/sub-container.component';



@NgModule({
  declarations: [
    SignupComponent,
    TestimonialComponent,
    SubContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestimonialModule { }
