import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ArtistListComponent} from './artist-list.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            },
            paramMap: of({ get: () => '1' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the artist list with default artists', () => {
    expect(component.artists.length).toBeGreaterThan(0);
    expect(component.artists[1].name).toBe('Courtney Barnett');
    expect(component.artists.length).toBe(6);

    expect(component.artists).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({name: 'Kurt Vile'}),
        jasmine.objectContaining({id: 1}),
        jasmine.objectContaining({
          id: jasmine.any(Number),
          name: jasmine.any(String),
          bio: jasmine.any(String),
          picture: jasmine.any(String)
        }),
      ])
    );
  });
});
