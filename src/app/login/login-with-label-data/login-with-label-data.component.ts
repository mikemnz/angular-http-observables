import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { LabelDataService } from 'src/app/_services/label.data.service';
import { LocalStorageService } from 'src/app/_services/localstorage.service';
import { Language } from './language';
import { LoginFormLabels } from './login-form-label';

declare var require: any;

@Component({
  selector: 'app-login-with-label-data',
  templateUrl: './login-with-label-data.component.html',
  styleUrls: ['./login-with-label-data.component.scss']
})
export class LoginWithLabelDataComponent implements OnInit {
  labelData: any;
  loginFormLabels: any;
  loginForm!: NgForm;
  title = '';
  model: User = {id: 0, userName: '', password: '', firstName: '', lastName: '', language: 'E'};
  languages: Language[];
  loading = false;
  returnUrl = '';
  submitted = false;
  selectedLanguage = this.model.language;
  loggedInUser: Observable<User> = of(this.model);

  constructor(private labelDataSvc: LabelDataService, private localStorageSvc: LocalStorageService,
              private auth: AuthenticationService, private router: Router) {
              this.languages =  [
                {name: 'English', code: 'E'}, 
                {name: 'മലയാളം', code: 'M'}
              ];
            }

  ngOnInit(): void {
    // remove cached label data
    this.localStorageSvc.remove('loginFormE');
    this.localStorageSvc.remove('loginFormM');
    this.loadForm();
  }

  /*
  load label json data from local json file base on the language selected, default is English (E)
  if label data is not in cache, add it in, otherwise get it from cache
  */
  loadForm(): void {
    const cachedLabels: any = this.localStorageSvc.get(`loginForm${this.selectedLanguage}`);
    if (cachedLabels) {
      this.labelData = JSON.parse(cachedLabels);
    } else {
      this.loginFormLabels = this.selectedLanguage === 'E' ?
        require('./label-seed-data.json') :
        require('./label-seed-data-malayalam.json');
      this.localStorageSvc.set(`loginForm${this.selectedLanguage}`, JSON.stringify(this.loginFormLabels));
      this.labelData = this.loginFormLabels;
    }
  }

  /*
  same as what in the login component, just check if a used is logged in or not,
  then do a redirect to admin component
  */
  login(): void {
    this.loggedInUser = this.auth.login(this.model);
    if (this.loggedInUser) {
      this.router.navigateByUrl('/admin');
    }
  }

  changeLanguage(): void {
    this.loadForm();
  }

}
