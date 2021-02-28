import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddOrderWorkshopTypeComponent} from './add-order-workshop-type.component';

describe('AddOrderWorkshopTypeComponent', () => {
  let component: AddOrderWorkshopTypeComponent;
  let fixture: ComponentFixture<AddOrderWorkshopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrderWorkshopTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderWorkshopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
