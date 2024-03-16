import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-important-dates',
  templateUrl: './important-dates.component.html',
  styleUrl: './important-dates.component.css'
})
export class ImportantDatesComponent {
  isFullPaperTabSelected:boolean=true;
  isAuthorsNotificationTabSelected:boolean=false;
  isCameraReadyTabSelected:boolean=false;
  isConferenceDateTabSelected:boolean=false;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  onFullPaperTabClick() {
    this.isFullPaperTabSelected = true;
    this.isAuthorsNotificationTabSelected = false;
    this.isCameraReadyTabSelected = false;
    this.isConferenceDateTabSelected = false;
    const fullPaperContent = this.el.nativeElement.querySelector('#full-paper').innerHTML;
    const content = this.el.nativeElement.querySelector('.overview-content');
    this.renderer.setProperty(content, 'innerHTML', fullPaperContent);
  }

  onAuthorsNotificationTabClick() {
    this.isFullPaperTabSelected = false;
    this.isAuthorsNotificationTabSelected = true;
    this.isCameraReadyTabSelected = false;
    this.isConferenceDateTabSelected = false;
    const authorsNotificationContent = this.el.nativeElement.querySelector('#authors-notification').innerHTML;
    const content = this.el.nativeElement.querySelector('.overview-content');
    this.renderer.setProperty(content, 'innerHTML', authorsNotificationContent);
  }

  onCameraReadyTabClick() {
    this.isFullPaperTabSelected = false;
    this.isAuthorsNotificationTabSelected = false;
    this.isCameraReadyTabSelected = true;
    this.isConferenceDateTabSelected = false;
    const cameraReadyContent = this.el.nativeElement.querySelector('#camera-ready').innerHTML;
    const content = this.el.nativeElement.querySelector('.overview-content');
    this.renderer.setProperty(content, 'innerHTML', cameraReadyContent);
  }

  onConferenceDateTabClick() {
    this.isFullPaperTabSelected = false;
    this.isAuthorsNotificationTabSelected = false;
    this.isCameraReadyTabSelected = false;
    this.isConferenceDateTabSelected = true;
    const conferenceDateContent = this.el.nativeElement.querySelector('#conference-date').innerHTML;
    const content = this.el.nativeElement.querySelector('.overview-content');
    this.renderer.setProperty(content, 'innerHTML', conferenceDateContent);
  }

}
