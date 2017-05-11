import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PointsServiceService {

    private points: Point[] = [];

    constructor() {
    }

    public getPoints(): Observable<Point[]> {
        return new BehaviorSubject(this.points);
    }

    public addPoints(pointsToAdd): Observable<Point[]> {
        this.points = this.points.concat(pointsToAdd)
        return this.getPoints()
    }

}
