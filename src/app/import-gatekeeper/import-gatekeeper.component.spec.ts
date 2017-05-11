import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportGatekeeperComponent } from './import-gatekeeper.component';

describe('ImportGatekeeperComponent', () => {
  let component: ImportGatekeeperComponent;
  let fixture: ComponentFixture<ImportGatekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportGatekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportGatekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
