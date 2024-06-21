import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';

import { AboutComponent } from './core/component/about/about.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { ProgramsComponent } from './apprenant/components/programs/programs.component';
import { LoginComponent } from './core/component/login/login.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { PricingComponent } from './core/component/pricing/pricing.component';
import { AuthGuard } from './auth.guard'; // Importer AuthGuard
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rediriger vers /dashboard
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'programs',
    component: ProgramsComponent,
  },
  {
    path: 'portal',
    loadChildren: () =>
      import('./portal/portal.module').then((x) => x.PortalModule),
    data: { preload: false },
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
    path: 'dashboard',
    component: DashboardComponent, // ou un autre composant de votre choix // Protéger cette route avec AuthGuard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
