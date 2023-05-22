/* tslint:disable:no-unused-variable */
// - Mocking by overriding functions
//
// class MockAuthService extends AuthService {
// 	authenticated = false;

// 	isAuthenticated() {
// 		return this.authenticated;
// 	}
// }


// - Mocking with fake classes
//
// import { AuthenticationService } from 'src/app/_services/authentication.service';
// import { HttpService } from 'src/app/_services/http.service';
// import {Login2Component} from './login2.component';

// class MockAuthService extends AuthenticationService {
// 	authenticated = false;

// 	isAuthenticated() {
// 		return this.authenticated;
// 	}
// }

// describe('Component: Login', () => {

// 	let component: Login2Component;
// 	let service: MockAuthService;
//     let http: HttpService;
    
	// beforeEach(() => {
	// 	service = new MockAuthService(http);
	// 	component = new Login2Component(null, service);
	// });

	// afterEach(() => {
	// 	service = null;
	// 	component = null;
	// });


	// it('needsLogin returns true when the user has not been authenticated', () => {
	// 	service.authenticated = false;
	// 	expect(component.needsLogin()).toBeTruthy();
	// });

	// it('needsLogin returns false when the user has been authenticated', () => {
	// 	service.authenticated = true;
	// 	expect(component.needsLogin()).toBeFalsy();
	// });
//});


// - Testing with the real `AuthService`
//
// import {LoginComponent} from './login.component';
// import {AuthService} from "./auth.service";
//
// describe('Component: Login', () => {
//
// 	let component: LoginComponent;
// 	let service: AuthService;
//
// 	beforeEach(() => {
// 		service = new AuthService();
// 		component = new LoginComponent(service);
// 	});
//
// 	afterEach(() => {
// 		localStorage.removeItem('token');
// 		service = null;
// 		component = null;
// 	});
//
//
// 	it('needsLogin returns true when the user has not been authenticated', () => {
// 		expect(component.needsLogin()).toBeTruthy();
// 	});
//
// 	it('needsLogin returns false when the user has been authenticated', () => {
// 		localStorage.setItem('token', '12345');
// 		expect(component.needsLogin()).toBeFalsy();
// 	});
// });
