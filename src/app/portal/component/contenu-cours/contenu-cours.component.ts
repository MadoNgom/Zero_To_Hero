import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contenu-cours',
  templateUrl: './contenu-cours.component.html',
  styleUrl: './contenu-cours.component.css',
})
export class ContenuCoursComponent {
  tabs: string[] = ['Contenu Cours', 'Reviews', 'Annonce'];
  @ViewChild('videoPlayer') videoPlayer: any;
  showPlayButton: boolean = true;

  activatedIndex: number = 0;
  changeTab(tabIndex: number) {
    this.activatedIndex = tabIndex;
  }

  playVideo() {
    this.videoPlayer.nativeElement.play();
    this.showPlayButton = false;
  }
}
