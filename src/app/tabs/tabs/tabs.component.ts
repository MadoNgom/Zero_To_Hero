import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements OnInit {
  @Input() tabsArr: string[] = [];
  @Output() onChangeTab = new EventEmitter<number>();

  activeTab: number = 0;

  getTab(index: number) {
    this.activeTab = index;
    this.onChangeTab.emit(this.activeTab);
  }
  ngOnInit(): void {}
}
