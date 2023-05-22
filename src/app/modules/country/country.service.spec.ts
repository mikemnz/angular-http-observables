import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountryService]
    });
  });

  it('should ...', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
