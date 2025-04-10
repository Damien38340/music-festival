import {inject, Injectable} from '@angular/core';
import {Artist} from './artist.model';
import {WebserviceService} from '../services/webservice.service';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private webservice = inject(WebserviceService)

  constructor() {
  }

  // artists = [
  //   {
  //     id: 1,
  //     name: 'Kurt Vile',
  //     bio: 'American singer, songwriter, and guitarist known for his work in indie rock and his solo career.',
  //     picture: 'assets/kurt-vile.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Courtney Barnett',
  //     bio: 'Australian singer-songwriter and guitarist known for her witty, deadpan lyrics and alt-rock style.',
  //     picture: 'assets/courtney-barnett.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Boy Pablo',
  //     bio: 'Norwegian indie pop band fronted by Nicolás Pablo, known for their catchy guitar-driven tunes.',
  //     picture: 'assets/boy-pablo.png'
  //   },
  //   {
  //     id: 4,
  //     name: 'Big Thief',
  //     bio: 'American indie rock band known for their emotive, raw sound, led by singer-songwriter Adrianne Lenker.',
  //     picture: 'assets/big-thief.jpg'
  //   },
  //   {
  //     id: 5,
  //     name: 'Caroline Rose',
  //     bio: 'American singer-songwriter blending folk, rock, and pop with a distinct and often quirky style.',
  //     picture: 'assets/caroline-rose.jpg'
  //   },
  //   {
  //     id: 6,
  //     name: 'Ron Gallo',
  //     bio: 'American musician known for his raw garage rock sound, sharp wit, and eclectic mix of punk, blues, and thoughtful lyricism.',
  //     picture: 'assets/ron-gallo.jpg'
  //   },
  // ];

  artists: Artist[] = [];

  getAllArtists(): Observable<Artist[]> {
    return this.webservice.getAllArtists();
  }

  getArtist(idArtist: number | string): Observable<Artist> {
    // const id = typeof idArtist === 'string' ? idArtist : idArtist;
    // return <Artist>this.artists.find((artist) => artist.id === id);
    return this.webservice.getArtist(idArtist);
  }

  deleteArtist(id: string | undefined) {
    // const index = this.artists.findIndex(artist => artist.id === id);
    // return this.artists.splice(index, 1);
    return this.webservice.deleteArtist(id);
  }

  addArtist(artist: Artist) {
    return this.webservice.createArtist(artist);
  }

}

