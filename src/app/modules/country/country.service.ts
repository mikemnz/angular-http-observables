import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from 'src/app/shared/country';
import { ErrorLogService } from 'src/app/_services/error-log.service';
import { HttpService } from 'src/app/_services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.eu/rest/v2/name/new';

  constructor(private http: HttpService, private httpClient: HttpClient, private errorLogSrc: ErrorLogService) { }

  loadCountryStartWithNew(): Observable<HttpResponse<Country[]>> {
    if (this.url === undefined) {
      return of();
    }
    return this.http.get(this.url, );
  }

  searchCountry(term: string): Observable<Country[]> {
    if (this.url === undefined) {
      return of ([]);
    }
    const a = this.httpClient.get<Country[]>(this.url)
      .pipe(
        catchError(this.errorLogSrc.handleError<Country[]>('countries', []))
      );
    return a;
  }
}
