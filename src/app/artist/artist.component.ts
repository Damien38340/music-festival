import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-artist',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './artist.component.html',
  standalone: true,
  styleUrl: './artist.component.scss'
})

export class ArtistComponent {

  @Input() artist: Artist | undefined;
  showBio: boolean = false;

  toggleBio() {
    this.showBio = !this.showBio;
  }
}

interface Artist {
  name: string;
  bio: string;
  picture: string;
}
