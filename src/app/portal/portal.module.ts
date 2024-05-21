import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { CalenderComponent } from './component/calender/calender.component';

@NgModule({
  declarations: [
    PortalComponent,
    UserComponent,
    DashboardComponent,
    SidebarComponent,
    MaincontentComponent,
    CalenderComponent,
  ],
  imports: [CommonModule, PortalRoutingModule],
})
export class PortalModule {}
