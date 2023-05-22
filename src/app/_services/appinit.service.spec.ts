/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AppInitService } from './appinit.service';

describe('Service: ConfigAssetLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInitService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([AppInitService], (service: AppInitService) => {
    expect(service).toBeTruthy();
  }));
});
