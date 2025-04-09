import {Component} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    NgIf,
    NgClass
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isOpen: boolean = false;

  toggleContent() {
    this.isOpen = !this.isOpen;
  }

}
