import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {Artist} from '../artist/artist.model';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit artist on submit', () => {

    component.artistForm.setValue({
      id: '42',
      name: 'Ron Gallo',
      // bio: 'Awesome bio',
      picture: 'assets/ron-gallo.jpg'
    });

    const testArtist: Artist = {
      id: '42',
      name: 'Ron Gallo',
      // bio: 'Awesome bio',
      photo: 'assets/ron-gallo.jpg'
    };

    spyOn(component.artistAdd, 'emit');

    component.onSubmit();

    expect(component.artistAdd.emit).toHaveBeenCalledWith(testArtist);
  })
});
