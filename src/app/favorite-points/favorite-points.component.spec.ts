import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePointsComponent } from './favorite-points.component';

describe('FavoritePointsComponent', () => {
  let component: FavoritePointsComponent;
  let fixture: ComponentFixture<FavoritePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
