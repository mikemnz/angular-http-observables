import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login2Component } from './login2/login2.component';
import { LoginRoutingModule } from './login-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { LoginWithLabelDataComponent } from './login-with-label-data/login-with-label-data.component';
import { AdminModule } from '../admin/admin.module';
import { LabSettingComponent } from '../admin/lab-setting/lab-setting.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    Login2Component,
    RegisterComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    LoginWithLabelDataComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    LoginRoutingModule,
    DropdownModule
  ],
  providers: [
  ]
})
export class LoginModule { }
