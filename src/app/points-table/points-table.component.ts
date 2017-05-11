import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {PointService} from '../points-service.service';

export interface Point {
    x: number;
    y: number;
}

@Component({
    selector: 'app-points-table',
    templateUrl: './points-table.component.html',
    styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {

    public points$: Observable<Point[]>;

    constructor(private pointsService: PointService) {
        this.points$ = pointsService.getPoints()
    }

    ngOnInit() {
    }

}
