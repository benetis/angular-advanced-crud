import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export interface Point {
    x: number;
    y: number;
}

@Component({
    selector: 'app-points-table',
    templateUrl: './points-table.component.html',
    styleUrls: ['./points-table.component.sass']
})
export class PointsTableComponent implements OnInit {

    public points$: Observable<Point[]> = of([
        {x: 1, y: 2},
        {x: -12, y: 22},
        {x: -2222, y: 4999},
    ]);

    constructor() {
    }

    ngOnInit() {
    }

}
