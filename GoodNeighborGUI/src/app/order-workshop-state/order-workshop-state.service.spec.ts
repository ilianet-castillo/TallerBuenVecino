import {TestBed} from '@angular/core/testing';

import {OrderWorkshopStateService} from './order-workshop-state.service';

describe('OrderWorkshopStateService', () => {
  let service: OrderWorkshopStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderWorkshopStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
