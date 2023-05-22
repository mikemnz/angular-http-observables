import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

declare var window: any;

@Injectable()

export class AppInitService {
  constructor(private httpService: HttpService) {}
  
  public init() {
    const promise = this.httpService.get('assets/config/config.json')
    .toPromise()
    .then(response => {
      // .....
        return response;
      });
    return promise;
  }
}
