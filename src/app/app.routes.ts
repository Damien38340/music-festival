import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistComponent} from './artist/artist.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artists', component: ArtistListComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
