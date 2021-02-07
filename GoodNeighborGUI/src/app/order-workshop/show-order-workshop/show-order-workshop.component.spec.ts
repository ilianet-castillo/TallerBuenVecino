import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderWorkshopComponent } from './show-order-workshop.component';

describe('ShowOrderWorkshopComponent', () => {
  let component: ShowOrderWorkshopComponent;
  let fixture: ComponentFixture<ShowOrderWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrderWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
