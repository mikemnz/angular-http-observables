import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CountryService {
  endpoint: string = "https://restcountries.eu/rest/v2/name/";

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    let url = `${this.endpoint}${term}`;
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(url);
      // .pipe(
      //   catchError(this.handleError<Country[]>('countries', []))
      // )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }

  /*
       // Create an Observable that will start listening to geolocation updates
    // when a consumer subscribes.
    const locations = new Observable((observer) => {
      let watchId: number;

      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }

      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });

    // Call subscribe() to start listening for updates.
    const locationsSubscription = this.locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    */

    
    
}