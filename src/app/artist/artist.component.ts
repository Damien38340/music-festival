import {Component, inject, Input} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ArtistService} from './artist.service';
import {Artist} from './artist.model';
import {WebserviceService} from '../services/webservice.service';

@Component({
  selector: 'app-artist',
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './artist.component.html',
  standalone: true,
  styleUrl: './artist.component.scss'
})

export class ArtistComponent {

  private webservice = inject(WebserviceService)

  constructor(private artistService: ArtistService) {
  }

  @Input() artist: Artist | undefined;
  showBio: boolean = false;
  showSingleArtist: boolean = false;

  @Input()
  set id(artistId: number) {
    this.showSingleArtist = true;
    this.artist = this.artistService.getArtist(artistId);
  }

  deleteArtist(id: number | undefined) {
    // this.artistService.deleteArtist(id);
    this.webservice.
  }

  toggleBio() {
    this.showBio = !this.showBio;
  }

  toggleSingleArtist() {
    this.showSingleArtist = !this.showSingleArtist;
  }

}

