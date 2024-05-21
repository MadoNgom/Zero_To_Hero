import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TestimonialComponent
  ]
})
export class SharedModule {}
