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

  it('should show error if input errMsg is set', () => {
    const fixture = TestBed.createComponent(ImportGatekeeperComponent);
    fixture.detectChanges();
    fixture.componentInstance.errMsg = 'some error123';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.error').textContent).toBe('some error123');

    fixture.componentInstance.errMsg = '';
    fixture.detectChanges();
    expect(compiled.querySelector('.error').textContent).toBe('');
  })
});
