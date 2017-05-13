import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationOptionsComponent } from './table-pagination-options.component';

describe('TablePaginationOptionsComponent', () => {
  let component: TablePaginationOptionsComponent;
  let fixture: ComponentFixture<TablePaginationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
