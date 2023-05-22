import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { CountryService } from './shared/county.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './_services/authentication.service';
import { CountryModule } from './modules/country/country.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchService } from './_services/search.service';
import { ItuneComponent } from './itune/itune.component';
import { ItuneSearchService } from './_services/itune-search.service';
@NgModule({
  declarations: [	
    AppComponent,
    AboutComponent,
    HomeComponent,
      ItuneComponent
   ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CountryModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CountryService, AuthenticationService, SearchService,ItuneSearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
