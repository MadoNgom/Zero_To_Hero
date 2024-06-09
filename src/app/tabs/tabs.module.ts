import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';

@NgModule({
  declarations: [Tab1Component, Tab2Component, Tab3Component, TabsComponent, TabNavComponent],
  imports: [CommonModule, TabsRoutingModule],
  exports: [Tab1Component, Tab2Component, Tab3Component, TabsComponent, TabNavComponent],
})
export class TabsModule {}
