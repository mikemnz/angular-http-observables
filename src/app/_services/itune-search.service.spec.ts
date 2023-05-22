/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItuneSearchService } from './itune-search.service';

describe('Service: ItuneSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItuneSearchService]
    });
  });

  it('should ...', inject([ItuneSearchService], (service: ItuneSearchService) => {
    expect(service).toBeTruthy();
  }));
});
