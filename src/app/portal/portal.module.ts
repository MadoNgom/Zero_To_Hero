import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { PortalRoutingModule } from './portal-routing.module';




@NgModule({
  declarations: [
    PortalComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
