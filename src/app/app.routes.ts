import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: SearchComponent },
    { path: 'artista/:id', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export class NameRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });