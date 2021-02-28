import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOrderWorkshopStateComponent} from './list-order-workshop-state.component';

describe('ListOrderWorkshopStateComponent', () => {
  let component: ListOrderWorkshopStateComponent;
  let fixture: ComponentFixture<ListOrderWorkshopStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrderWorkshopStateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderWorkshopStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
