import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  query:string;

  constructor(private spotifyService:SpotifyService) { 
    this.query = '';
  }

  ngOnInit() {
  }

  searchArtist(){
    this.spotifyService.getArtists(this.query).subscribe();
  }

}
