import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchItem } from '../_models/search-item';

@Injectable({
  providedIn: 'root'
})
export class ItuneSearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: HttpClient) { }

  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
      .toPromise()
      .then(
        (res: any) => {
          console.log(res);
          this.results = res.results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve(res);
        },
        msg => {
          reject(msg);
        }
      )
    });

    return promise;
  }
}
