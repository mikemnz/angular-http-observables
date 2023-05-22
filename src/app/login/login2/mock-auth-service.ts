import { AuthenticationService } from 'src/app/_services/authentication.service';

export class MockAuthService extends AuthenticationService {
	authenticated = false;

	isAuthenticated() {
		return this.authenticated;
	}

	isLoggedIn() {
		return this.authenticated;
	}
}