import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSearch: string = "https://api.spotify.com/v1/search";
  urlArtist: string = "https://api.spotify.com/v1/artists";
  

  constructor(private http: Http) { }

  getArtists(query: string) {
    let params = `?q=${query}&type=artist`;
    let url = this.urlSearch + params;

    return this.http.get(url)
      .map(res => this.artists = res.json().artists.items);
  }

  getArtist(id: string) {
    let params = `/${id}`;
    let url = this.urlArtist + params;

    return this.http.get(url)
      .map(res => res.json());
  }

  getTopTracks(id: string) {
    let params = `/${id}/top-tracks?country=US`;
    let url = this.urlArtist + params;

    return this.http.get(url)
      .map(res => res.json().tracks);
  }

}
