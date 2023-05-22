import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  model: User = {id: 0, userName: 'username', password: 'password', firstName: '', lastName: '', language: 'E'};
  loading = false;
  returnUrl = '';
  submitted = false;
  private loggedInUser: Observable<User> = of(this.model);
  
  constructor(private route: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login(): boolean {
    this.loggedInUser = this.auth.login(this.model);
    return true;
  }

  needsLogin() {
    return !this.auth.loggedIn();
  }
}
