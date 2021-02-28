import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOrderWorkshopTypeComponent} from './list-order-workshop-type.component';

describe('ListOrderWorkshopTypeComponent', () => {
  let component: ListOrderWorkshopTypeComponent;
  let fixture: ComponentFixture<ListOrderWorkshopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrderWorkshopTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderWorkshopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
