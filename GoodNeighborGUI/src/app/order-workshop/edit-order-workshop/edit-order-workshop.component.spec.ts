import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderWorkshopComponent } from './edit-order-workshop.component';

describe('EditOrderWorkshopComponent', () => {
  let component: EditOrderWorkshopComponent;
  let fixture: ComponentFixture<EditOrderWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
