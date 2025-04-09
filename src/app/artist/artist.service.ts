import {Injectable} from '@angular/core';
import {Artist} from './artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() {
  }

  artists = [
    {
      id: 1,
      name: 'Kurt Vile',
      bio: 'American singer, songwriter, and guitarist known for his work in indie rock and his solo career.',
      picture: 'assets/kurt-vile.jpg'
    },
    {
      id: 2,
      name: 'Courtney Barnett',
      bio: 'Australian singer-songwriter and guitarist known for her witty, deadpan lyrics and alt-rock style.',
      picture: 'assets/courtney-barnett.jpg'
    },
    {
      id: 3,
      name: 'Boy Pablo',
      bio: 'Norwegian indie pop band fronted by Nicolás Pablo, known for their catchy guitar-driven tunes.',
      picture: 'assets/boy-pablo.png'
    },
    {
      id: 4,
      name: 'Big Thief',
      bio: 'American indie rock band known for their emotive, raw sound, led by singer-songwriter Adrianne Lenker.',
      picture: 'assets/big-thief.jpg'
    },
    {
      id: 5,
      name: 'Caroline Rose',
      bio: 'American singer-songwriter blending folk, rock, and pop with a distinct and often quirky style.',
      picture: 'assets/caroline-rose.jpg'
    },
    {
      id: 6,
      name: 'Ron Gallo',
      bio: 'American musician known for his raw garage rock sound, sharp wit, and eclectic mix of punk, blues, and thoughtful lyricism.',
      picture: 'assets/ron-gallo.jpg'
    },
  ];

  getAllArtists() {
    return this.artists;
  }

  getArtist(idArtist: number | string): Artist {
    const id = typeof idArtist === 'string' ? parseInt(idArtist) : idArtist;
    return <Artist>this.artists.find((artist) => artist.id === id);
  }

  deleteArtist(id: number | undefined) {
    const index = this.artists.findIndex(artist => artist.id === id);
    return this.artists.splice(index, 1);
  }

  addArtist(artist: Artist) {
    this.artists.push(artist);
  }

}

