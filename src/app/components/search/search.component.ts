import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(private spotifyService: SpotifyService) {
    this.query = '';
  }

  ngOnInit(): void {
    this.spotifyService.artists = [];
    this.spotifyService.getSpotifyToken();
  }

  searchArtist() {
    this.spotifyService.getArtists(this.query);
  }

  get artist() {
    return this.spotifyService.artists;
  }
}
