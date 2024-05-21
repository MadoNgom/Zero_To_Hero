import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ApprenantModule } from './apprenant/apprenant.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
<<<<<<< HEAD
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],
  bootstrap: [AppComponent]
=======
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ApprenantModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
>>>>>>> test
})
export class AppModule {}
