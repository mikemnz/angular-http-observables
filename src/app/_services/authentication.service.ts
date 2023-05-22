import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = '';
  currentUser: User | undefined;

  constructor(@Inject(HttpService) private http: HttpService) { }


  login(model: User): Observable<User> {
    localStorage.setItem('user', JSON.stringify({userName: 'username', password: 'password'}));
    return of(model);
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }

  register(user: User): Observable<User> {
    return this.http.post(this.baseUrl + 'register', user);

  }

  loggedIn(): boolean {
    return  !!localStorage.getItem('token');
  }

}
