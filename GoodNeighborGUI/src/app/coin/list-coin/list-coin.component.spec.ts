import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoinComponent } from './list-coin.component';

describe('ListCoinComponent', () => {
  let component: ListCoinComponent;
  let fixture: ComponentFixture<ListCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
