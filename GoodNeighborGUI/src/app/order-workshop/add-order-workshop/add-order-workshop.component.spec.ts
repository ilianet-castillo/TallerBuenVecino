import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderWorkshopComponent } from './add-order-workshop.component';

describe('AddOrderWorkshopComponent', () => {
  let component: AddOrderWorkshopComponent;
  let fixture: ComponentFixture<AddOrderWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
