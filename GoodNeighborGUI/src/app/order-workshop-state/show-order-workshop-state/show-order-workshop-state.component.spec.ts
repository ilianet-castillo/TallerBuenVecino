import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowOrderWorkshopStateComponent} from './show-order-workshop-state.component';

describe('ShowOrderWorkshopStateComponent', () => {
  let component: ShowOrderWorkshopStateComponent;
  let fixture: ComponentFixture<ShowOrderWorkshopStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOrderWorkshopStateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderWorkshopStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
