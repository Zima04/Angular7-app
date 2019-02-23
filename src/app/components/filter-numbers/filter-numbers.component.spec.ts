import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNumbersComponent } from './filter-numbers.component';

describe('FilterNumbersComponent', () => {
  let component: FilterNumbersComponent;
  let fixture: ComponentFixture<FilterNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
