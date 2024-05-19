import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { LoginComponent } from './core/component/login/login.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { AboutComponent } from './core/component/about/about.component';
import { ContactComponent } from './core/component/contact/contact.component';

// Define the application's routes in an array of type Routes
const routes: Routes = [
  {
    // Lazy load the PortalModule when the 'portal' path is accessed
    path: 'portal',
    loadChildren: () =>
      import('./portal/portal.module').then((x) => x.PortalModule),
    // Additional data indicating that this module should not be preloaded
    data: { preload: false },
  },
  {
    // Redirect the empty path to '/home' with a full path match
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    // Route for the 'home' path, loading the HomeComponent
    path: 'home',
    component: HomeComponent,
  },
  {
    // Route for the 'login' path, loading the LoginComponent
    path: 'login',
    component: LoginComponent,
  },
  {
    // Route for the 'signup' path, loading the SignupComponent
    path: 'signup',
    component: SignupComponent,
  },
  {
    // Route for the 'about' path, loading the AboutComponent
    path: 'about',
    component: AboutComponent,
  },
  {
    // Route for the 'contact' path, loading the ContactComponent
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
