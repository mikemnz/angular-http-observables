import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItuneComponent } from './itune/itune.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'itune', component: ItuneComponent },
  { path: 'country',
        loadChildren: () => import('./modules/country/country.module')
            .then(m => m.CountryModule)},
  { path: 'login',
        loadChildren: () => import('./login/login.module')
        .then(m => m.LoginModule)},
  { path: 'login2',
        loadChildren: () => import('./login/login.module')
        .then(m => m.LoginModule)},
        { path: 'country',
              loadChildren: () => import('./modules/country/country.module')
              .then(m => m.CountryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
