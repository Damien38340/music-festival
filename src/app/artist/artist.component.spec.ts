import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;

    component.artist = {
      id: 1,
      name: 'Test Artist',
      bio: 'A great artist',
      picture: 'assets/test-artist.jpg'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the artist in the HTML', ()=> {
    expect(component.artist!.name).toBe('Test Artist');
    expect(component.artist!.bio).toBe('A great artist');
    expect(component.artist!.picture).toBe('assets/test-artist.jpg');
  });
  it('should render artist name in an h2 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Artist');
  });

  it('should render the artist bio when showBio is true', () => {
    component.showBio = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bio')?.textContent).toContain('A great artist');
  });

  it('should display the correct artist image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;

    expect(img.src).toContain('assets/test-artist.jpg');
    expect(img.alt).toBe('Test Artist');
  });

  it('should toggle bio visibility when button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;

    expect(component.showBio).toBeFalse();
    button.click();
    fixture.detectChanges();

    expect(component.showBio).toBeTrue();
    expect(compiled.querySelector('.bio')).toBeTruthy();

    button.click();
    fixture.detectChanges();

    expect(component.showBio).toBeFalse();
    expect(compiled.querySelector('.bio')).toBeFalsy();
  });

  it('should toggle showBio property when toggleBio is called', () => {
    expect(component.showBio).toBeFalse();
    component.toggleBio();
    expect(component.showBio).toBeTrue();
  });

});
