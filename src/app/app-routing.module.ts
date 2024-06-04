import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';

import { AboutComponent } from './core/component/about/about.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { AuthGuard } from './auth.guard';
import { ProgramsComponent } from './apprenant/components/programs/programs.component';
import { LoginComponent } from './core/component/login/login.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'apprenant',
    loadChildren: () =>
      import('./apprenant/apprenant.module').then((m) => m.ApprenantModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'programs',
    component: ProgramsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
