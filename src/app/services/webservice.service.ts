import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artist} from '../artist/artist.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  private http: HttpClient = inject(HttpClient);
  host = 'https://artists-api-ndhd.onrender.com';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer f3e91f07a577250eb7bda4fccf37adf0'
    });
  }

  constructor() {
  }

  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>((`${this.host}/artists`),
      {headers: this.getHeaders()});
  }

  getArtist(id: number | string): Observable<Artist> {
    return this.http.get<Artist>(`${this.host}/artists/${id}`,
      {headers: this.getHeaders()});
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(`${this.host}/artists`,
      artist,
      {
        headers: this.getHeaders()
      });
  }

  deleteArtist(id: string | undefined): Observable<Artist> {
    return this.http.delete<Artist>(`${this.host}/artists/${id}`,
      {headers: this.getHeaders()});
  }

}
