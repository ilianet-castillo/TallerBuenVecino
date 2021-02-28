import {TestBed} from '@angular/core/testing';

import {OrderWorkshopTypeService} from './order-workshop-type.service';

describe('OrderWorkshopTypeService', () => {
  let service: OrderWorkshopTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderWorkshopTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
