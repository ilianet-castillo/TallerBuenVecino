import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditOrderWorkshopStateComponent} from './edit-order-workshop-state.component';

describe('EditOrderWorkshopStateComponent', () => {
  let component: EditOrderWorkshopStateComponent;
  let fixture: ComponentFixture<EditOrderWorkshopStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditOrderWorkshopStateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderWorkshopStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
