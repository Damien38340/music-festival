import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ArtistComponent} from '../artist/artist.component';

@Component({
  selector: 'app-artist-list',
  imports: [
    NgForOf,
    ArtistComponent
  ],
  templateUrl: './artist-list.component.html',
  standalone: true,
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {

  artists = [
    { name: 'Kurt Vile', bio: 'American singer, songwriter, and guitarist known for his work in indie rock and his solo career.', picture:'assets/kurt-vile.png' },
    { name: 'Courtney Barnett', bio: 'Australian singer-songwriter and guitarist known for her witty, deadpan lyrics and alt-rock style.', picture:'assets/courtney-barnett.jpg' },
    { name: 'Boy Pablo', bio: 'Norwegian indie pop band fronted by Nicolás Pablo, known for their catchy guitar-driven tunes.', picture:'assets/boy-pablo.png' },
    { name: 'Big Thief', bio: 'American indie rock band known for their emotive, raw sound, led by singer-songwriter Adrianne Lenker.', picture:'assets/big-thief.jpg' },
    { name: 'Caroline Rose', bio: 'American singer-songwriter blending folk, rock, and pop with a distinct and often quirky style.', picture:'assets/caroline-rose.jpg' }
  ];

}
