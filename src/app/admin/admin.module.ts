import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LabSettingComponent } from './lab-setting/lab-setting.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [LabSettingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PanelModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule
  ]
})
export class AdminModule { }
