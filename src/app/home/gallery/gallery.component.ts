import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'] // Correction de la propriété 'styleUrl'
})
export class GalleryComponent {
  constructor(private router: Router) {}
  index: number = 0;
  images: string[] = [
    'assets/images/1.JPG',
    'assets/images/2.JPG',
    'assets/images/3.JPG',
    'assets/images/4.JPG',
    'assets/images/5.JPG',
    'assets/images/6.JPG',
    'assets/images/7.JPG',
    'assets/images/8.JPG',
    'assets/images/9.JPG',
    'assets/images/10.JPG',
    'assets/images/11.JPG',
    'assets/images/12.JPG',
  ];

  previous(): void {
    this.index = (this.index - 1 + this.images.length) % this.images.length;

  }

  next(): void {
    this.index = (this.index + 1) % this.images.length;

  }
}
