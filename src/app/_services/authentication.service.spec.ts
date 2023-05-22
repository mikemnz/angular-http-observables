/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AuthenticationService } from './authentication.service';
import { HttpService } from './http.service';

describe('Service: Authentication', () => {
  let service: AuthenticationService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService, AuthenticationService]
    });
    service = new AuthenticationService(http);
  });

  afterEach(() => {
      service = null;
      localStorage.removeItem('token');
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
      expect(service.loggedIn()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.loggedIn()).toBeFalsy();
  });

  it('should return true after login', (done) => {
    const user: User = {id: 1, userName: 'username', password: 'password', firstName: '', lastName: '', language: ''}
    return service.login(user).toPromise().then((result) => {
        expect(result).toEqual(user);
        done();
    });
  });

  it('should return true after logout', () => {
    service.logout();
    expect(service.loggedIn()).toBeFalsy();
  });

 
});
