import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ArtistComponent} from '../artist/artist.component';
import {ArtistService} from '../artist/artist.service';
import {Artist} from '../artist/artist.model';

@Component({
  selector: 'app-artist-list',
  imports: [
    NgForOf,
    ArtistComponent,
  ],
  templateUrl: './artist-list.component.html',
  standalone: true,
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    this.artists = this.artistService.getAllArtists();
  }

}
