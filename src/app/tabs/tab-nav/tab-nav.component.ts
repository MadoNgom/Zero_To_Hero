import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrl: './tab-nav.component.css',
})
export class TabNavComponent {
  @Input() tabsArr: string[] = [];
  @Output() onChangeTab = new EventEmitter<number>();

  activeTab: number = 0;

  getTab(index: number) {
    this.activeTab = index;
    this.onChangeTab.emit(this.activeTab);
  }
  ngOnInit(): void {}
}
