import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {Artist} from '../artist/artist.model';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
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
      bio: 'Awesome bio',
      picture: 'assets/ron-gallo.jpg'
    });

    const testArtist: Artist = {
      id: Number('42'),
      name: 'Ron Gallo',
      bio: 'Awesome bio',
      picture: 'assets/ron-gallo.jpg'
    };

    spyOn(component.artistAdd, 'emit');

    component.onSubmit();

    expect(component.artistAdd.emit).toHaveBeenCalledWith(testArtist);
  })
});
