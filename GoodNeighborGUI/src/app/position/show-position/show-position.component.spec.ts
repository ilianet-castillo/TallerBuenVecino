import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPositionComponent } from './show-position.component';

describe('ShowPositionComponent', () => {
  let component: ShowPositionComponent;
  let fixture: ComponentFixture<ShowPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
