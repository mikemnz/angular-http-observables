import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppError } from '../_models/error';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {
  //get it from asset/config/config.json
  baseUrl = '';  

  constructor(private http: HttpService) { }

  LogError(model: AppError) {
    if (model.Name == null) {
      return;
    }
    this.http
      .post(this.baseUrl + '/JavascriptErrorLog/LogAngularError', {error: model})
      .subscribe();
  }

  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}

