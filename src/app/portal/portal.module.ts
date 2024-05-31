import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { UserComponent } from './component/user/user.component';
import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { CourseContentComponent } from './component/course-content/course-content.component';
import { CourseComponent } from './component/course/course.component';
import { ReusableHeaderComponent } from './component/reusable-header/reusable-header.component';
import { CoursComponent } from './component/cours/cours.component';
import { SharedModule } from '../shared/shared.module';

import { ReviewsComponent } from './component/reviews/reviews.component';
import { QuizzComponent } from './component/quizz/quizz.component';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
@NgModule({
  declarations: [
    PortalComponent,
    UserComponent,
    DashboardComponent,
    SidebarComponent,
    MaincontentComponent,
    TabsComponent,
    CourseContentComponent,
    CourseComponent,
    ReusableHeaderComponent,
    CoursComponent,
    ReviewsComponent,
    QuizzComponent,
    SuggestionComponent,
  ],
  imports: [CommonModule, PortalRoutingModule, SharedModule],
})
export class PortalModule {}
