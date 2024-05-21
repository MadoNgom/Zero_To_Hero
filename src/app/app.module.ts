import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SignupModule } from './core/component/signup/signup.module';
import { LoginModule } from './core/component/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    SignupModule,
    LoginModule
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr",
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
