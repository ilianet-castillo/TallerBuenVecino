import {TestBed} from '@angular/core/testing';

import {OrderWorkshopService} from './order-workshop.service';

describe('OrderWorkshopService', () => {
  let service: OrderWorkshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderWorkshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
