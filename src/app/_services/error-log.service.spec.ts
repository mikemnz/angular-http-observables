/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorLogService } from './error-log.service';

describe('Service: ErrorLog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorLogService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ErrorLogService], (service: ErrorLogService) => {
    expect(service).toBeTruthy();
  }));
});
