import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren:  () => import('./portal/portal.module').then(x => x.PortalModule),
    data: { preload: false }
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
