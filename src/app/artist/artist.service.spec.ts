import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('ArtistService', () => {
  let service: ArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        {ArtistService, useClass: ArtistService}
      ]
    });
    service = TestBed.inject(ArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should delete artist', () => {
    spyOn(service, 'deleteArtist');
    expect(service.deleteArtist).toHaveBeenCalled();
    // service.deleteArtist('1');
    // expect(service.artists.length).toBe(5);
  });
});
