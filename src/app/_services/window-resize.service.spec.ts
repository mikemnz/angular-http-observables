/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowResizeService } from './window-resize.service';

describe('Service: WindowResize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowResizeService]
    });
  });

  it('should ...', inject([WindowResizeService], (service: WindowResizeService) => {
    expect(service).toBeTruthy();
  }));
});
