import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { LoginComponent } from './core/component/login/login.component';
import { AboutComponent } from './core/component/about/about.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () =>
      import('./portal/portal.module').then((x) => x.PortalModule),
    data: { preload: false },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'apprenant',
    loadChildren: () =>
      import('./apprenant/apprenant.module').then((m) => m.ApprenantModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'apprenant',
    canActivate: [AuthGuard],
    loadChildren: () => import('./apprenant/apprenant.module').then(m => m.ApprenantModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}