import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-lab-setting',
  templateUrl: './lab-setting.component.html',
  styleUrls: ['./lab-setting.component.scss']
})
export class LabSettingComponent implements OnInit {
  returnUrl = '';
  showConfim = false;
  confirmed = false;
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.showConfim = true;
    if (this.confirmed)
    {
      this.auth.logout();
      this.router.navigateByUrl('/');
    }
  }

  /*
  // close dialog, no log out
  */
  cancelDialog(): void {
    this.confirmed = false;
    this.showConfim = false;
  }

  /*
  // close dialog and log out
  */
  confirmDialog(): void {
    this.confirmed = true;
    this.showConfim = false;
    this.logout();
  }
}
