import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabSettingComponent } from './lab-setting/lab-setting.component';

const routes: Routes = [
  {path: '', component: LabSettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
