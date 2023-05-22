import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, NgModel } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/shared/http.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

import { LoginWithLabelDataComponent } from './login-with-label-data.component';

describe('LoginWithLabelDataComponent', () => {
  let component: LoginWithLabelDataComponent;
  let fixture: ComponentFixture<LoginWithLabelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithLabelDataComponent, NgForm, NgModel ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService, AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithLabelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
