import { TestBed } from '@angular/core/testing';

import { HotelAndResortsService } from './hotel-and-resorts.service';

describe('HotelAndResortsService', () => {
  let service: HotelAndResortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelAndResortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
