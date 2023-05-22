/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Login2Component } from './login2.component';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/_services/http.service';
import { MockAuthService } from './mock-auth-service';

describe('Login2Component', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;
  let service: AuthenticationService;
  let authService: AuthenticationService;
  let mockService: MockAuthService;
  let spy: any;
  let http: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login2Component ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService, AuthenticationService]
    })
    .compileComponents();
    authService = TestBed.inject(AuthenticationService);
    service = new AuthenticationService(http);
    mockService = new MockAuthService(http);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Button label', async () => {
    const debug=fixture.debugElement.query(By.css('input[value="Login"]'));
    const native=debug.nativeElement;
    const buttonElem=native;
    fixture.detectChanges();
    expect(buttonElem.value.trim()).toBe('Login');
    spyOn(authService, 'loggedIn').and.returnValue(await Promise.resolve(true));
    // let spy = spyOn(authService, 'loggedIn').and.returnValue(await Promise.resolve(true));
    // spy.calls.mostRecent().returnValue.then(() => {
    //   fixture.detectChanges();
    //   expect(buttonElem.value.trim()).toBe('Logout');
    //   done();
    // });
    // component.login();
    // fixture.detectChanges();
    // expect(buttonElem.value.trim()).toBe('Logout');
  });

  it('should returns true when the user has not been authenticated', () => {
    component = new Login2Component(null, service);
    spy = spyOn(service, 'loggedIn').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.loggedIn).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    component = new Login2Component(null, service);
    spy = spyOn(service, 'loggedIn').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.loggedIn).toHaveBeenCalled();
  });

  // mock service
  it('needsLogin returns true when the user has not been authenticated', () => {    
		mockService.authenticated = false;
    component = new Login2Component(null, mockService);
		expect(component.needsLogin()).toBeTruthy();
	});

	
});
