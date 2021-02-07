import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoinComponent } from './show-coin.component';

describe('ShowCoinComponent', () => {
  let component: ShowCoinComponent;
  let fixture: ComponentFixture<ShowCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
