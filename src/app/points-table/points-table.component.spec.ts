import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PointsTableComponent} from './points-table.component';
import {By} from '@angular/platform-browser';
import {AppModule} from '../app.module';

describe('PointsTableComponent', () => {
    let component: PointsTableComponent;
    let fixture: ComponentFixture<PointsTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PointsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
