import {Component, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ArtistService} from '../artist/artist.service';
import {Artist} from '../artist/artist.model';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  standalone: true,
  styleUrl: './form.component.scss'
})
export class FormComponent {

  artistAdd = output<Artist>();
  artistForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    bio: new FormControl(''),
    picture: new FormControl(''),
  })

  constructor(private artistService: ArtistService) {
  }

  onSubmit() {
    const artist: Artist = {
      id: Number(this.artistForm.get('id')?.value || ''),
      name: this.artistForm.get('name')?.value || '',
      bio: this.artistForm.get('bio')?.value || '',
      picture: this.artistForm.get('picture')?.value || ''
    };

    this.artistAdd.emit(artist);


    //
    // onSubmit(){
    //   this.artistService.addArtist(this.artistForm.value); // chercher comment convertir en données sans formulaire as getRawValue
    //   console.warn(this.artistForm.value);
    // }

  }
}
