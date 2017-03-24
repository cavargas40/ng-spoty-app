import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any;
  tracks: any[];

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(param => param['id'])
      .subscribe(id => {
        this.spotifyService.getArtist(id)
        .subscribe(data => this.artist = data);

        this.spotifyService.getTopTracks(id)
        .subscribe(data => this.tracks = data)
      });
  }

}
