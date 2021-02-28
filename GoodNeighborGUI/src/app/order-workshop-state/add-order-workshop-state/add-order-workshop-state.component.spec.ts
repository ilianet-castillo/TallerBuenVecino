import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddOrderWorkshopStateComponent} from './add-order-workshop-state.component';

describe('AddOrderWorkshopStateComponent', () => {
  let component: AddOrderWorkshopStateComponent;
  let fixture: ComponentFixture<AddOrderWorkshopStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrderWorkshopStateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderWorkshopStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
