import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artist: any;
  tracks: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id = null }) => {
      if (id) {
        this.spotifyService
          .getArtist(id)
          .subscribe((data) => (this.artist = data));
        this.spotifyService
          .getTopTracks(id)
          .subscribe((data) => (this.tracks = data));
      }
    });
  }
}
