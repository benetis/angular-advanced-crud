import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PointService {

    private points = new BehaviorSubject([])
    private _points = []

    constructor() {
        this.points.subscribe(_ => this._points = _)
    }

    public getPoints(): Observable<Point[]> {
        return this.points;
    }

    public addPoints(pointsToAdd): Observable<Point[]> {
        this.points.next([...this._points, ...pointsToAdd])
        return this.getPoints()
    }

}
