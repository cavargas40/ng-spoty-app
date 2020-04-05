import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  artists: any[] = [];
  urlSearch: string = 'https://api.spotify.com/v1/search';
  urlArtist: string = 'https://api.spotify.com/v1/artists';

  constructor(private httpClient: HttpClient) {}

  getSpotifyToken() {
    const url = 'https://accounts.spotify.com/api/token';

    const authorization = btoa(`${ENV.client_id}:${ENV.client_secret}`);

    const body = new HttpParams().set('grant_type', 'client_credentials');

    return this.httpClient
      .post(url, body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Basic ${authorization}`),
      })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.access_token);
      });
  }

  getArtists(query: string) {
    let params = `?q=${query}&type=artist`;
    let url = this.urlSearch + params;

    return this.httpClient
      .get(url, this.getHeaders())
      .subscribe((res: any) => (this.artists = res.artists.items));
  }

  getArtist(id: string) {
    let params = `/${id}`;
    let url = this.urlArtist + params;

    return this.httpClient.get(url, this.getHeaders());
  }

  getTopTracks(id: string) {
    let params = `/${id}/top-tracks?country=US`;
    let url = this.urlArtist + params;

    return this.httpClient
      .get(url, this.getHeaders())
      .pipe(map((res: any) => res.tracks));
    //.subscribe((res) => console.log(res));
    //.map(res => res.json().tracks);
  }

  getHeaders() {
    return {
      headers: new HttpHeaders().set(
        'Authorization',
        ` Bearer ${localStorage.getItem('token')}`
      ),
    };
  }
}
