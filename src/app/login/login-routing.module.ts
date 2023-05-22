import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginWithLabelDataComponent } from './login-with-label-data/login-with-label-data.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {path: '', component: Login2Component},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'login-with-label-data', component: LoginWithLabelDataComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
