import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ReusableHeaderComponent } from './component/reusable-header/reusable-header.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
import { TabsModule } from '../tabs/tabs.module';
import { CoursComponent } from './component/cours/cours.component';
import { ContenuCoursComponent } from './component/contenu-cours/contenu-cours.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProjetComponent } from './component/projet/projet.component';
import { Projet1Component } from './component/projet1/projet1.component';
@NgModule({
  declarations: [
    PortalComponent,
    UserComponent,
    DashboardComponent,
    SidebarComponent,
    ReusableHeaderComponent,
    SuggestionComponent,
    CoursComponent,
    ContenuCoursComponent,
    ProfileComponent,
    ProjetComponent,
    Projet1Component,
  ],
  imports: [CommonModule, PortalRoutingModule, SharedModule, TabsModule],
})
export class PortalModule {}
