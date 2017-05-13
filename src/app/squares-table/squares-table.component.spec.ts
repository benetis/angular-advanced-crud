import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresTableComponent } from './squares-table.component';

describe('SquaresTableComponent', () => {
  let component: SquaresTableComponent;
  let fixture: ComponentFixture<SquaresTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquaresTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
