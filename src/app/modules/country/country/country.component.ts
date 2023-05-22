import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Country } from 'src/app/shared/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  loading = false;
  countries$: Observable<Country[]>;
  countryList$: Observable<Country[]> ;
  private searchTerms = new Subject<string>();
  private countrySubject = new Subject<string>();

  constructor(private countryService: CountryService, private router: Router) { 
    this.countryList$ = of([]);
  }

  search(term: string) {
    this.countrySubject.next(term);
  }

  ngOnInit(): void {
    this.countryList$ = this.countrySubject.pipe(
      switchMap((msg: string) => this.countryService.searchCountry(msg))
    );

    this.loadCountry();

    // this.countries$ = this.searchTerms.pipe(
    //   tap(_ => this.loading = true),
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.countryService.searchCountry()),
    //   tap(_ => this.loading = false)
    // )
  }

  loadCountry(): void {
    this.countryService.loadCountryStartWithNew()
    .subscribe((resp: any) => {
      this.countries$ = resp.body;
    }, error => {
      console.log(error);
    });
  }

  showLogin(): void {
    this.router.navigateByUrl('login2');
  }
}