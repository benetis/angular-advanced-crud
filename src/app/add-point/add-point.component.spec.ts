import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPointComponent} from './add-point.component';
import {AppModule} from '../app.module';

describe('AddPointComponent', () => {
    let component: AddPointComponent;
    let fixture: ComponentFixture<AddPointComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
