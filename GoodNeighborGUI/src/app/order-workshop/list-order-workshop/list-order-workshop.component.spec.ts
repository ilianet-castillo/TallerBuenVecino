import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOrderWorkshopComponent} from './list-order-workshop.component';

describe('ListOrderWorkshopComponent', () => {
  let component: ListOrderWorkshopComponent;
  let fixture: ComponentFixture<ListOrderWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrderWorkshopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
