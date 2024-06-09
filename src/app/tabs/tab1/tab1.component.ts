import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css',
})
export class Tab1Component {
  isChecked: boolean = false;
  toggleChecked() {
    this.isChecked = !this.isChecked;
  }
  ngOnInit(): void {}
}
