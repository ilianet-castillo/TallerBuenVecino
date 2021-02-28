import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditOrderWorkshopTypeComponent} from './edit-order-workshop-type.component';

describe('EditOrderWorkshopTypeComponent', () => {
  let component: EditOrderWorkshopTypeComponent;
  let fixture: ComponentFixture<EditOrderWorkshopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditOrderWorkshopTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderWorkshopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
