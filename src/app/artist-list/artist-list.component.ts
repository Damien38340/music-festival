import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ArtistComponent} from '../artist/artist.component';
import {ArtistService} from '../artist/artist.service';
import {Artist} from '../artist/artist.model';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-artist-list',
  imports: [
    NgForOf,
    ArtistComponent,
    FormComponent,
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
    this.artistService.getAllArtists().subscribe(
      artists => this.artists = artists,
    )
  }

  addArtist(artist: Artist) {
    this.artistService.addArtist(artist);
  }

}
