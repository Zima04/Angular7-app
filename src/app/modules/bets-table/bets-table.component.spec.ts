import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsTableComponent } from './bets-table.component';

describe('BetsTableComponent', () => {
  let component: BetsTableComponent;
  let fixture: ComponentFixture<BetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
