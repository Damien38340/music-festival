import { TestBed } from '@angular/core/testing';

import { WebserviceService } from './webservice.service';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('WebserviceService', () => {
  let service: WebserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(WebserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
