import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowOrderWorkshopTypeComponent} from './show-order-workshop-type.component';

describe('ShowOrderWorkshopTypeComponent', () => {
  let component: ShowOrderWorkshopTypeComponent;
  let fixture: ComponentFixture<ShowOrderWorkshopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOrderWorkshopTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderWorkshopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
