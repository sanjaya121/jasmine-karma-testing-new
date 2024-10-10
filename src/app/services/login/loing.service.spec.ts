import { TestBed } from '@angular/core/testing';

import { LoingService } from './loing.service';

describe('LoingService', () => {
  let service: LoingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
