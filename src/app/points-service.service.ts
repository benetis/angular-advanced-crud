import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {of} from 'rxjs/observable/of';

export interface PSResponse { message: string, error: boolean
}

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

    public addPoints(pointsToAdd: Point[]): Observable<PSResponse> {
        const overLimit: boolean = (this._points.length + pointsToAdd.length) > 10000
        if (overLimit) {
            return of({error: true, message: 'over limit'})
        } else if (this.hasDuplicates(this._points, pointsToAdd)) {
            return of({error: true, message: 'duplicate'})
        } else {
            this.points.next([...this._points, ...pointsToAdd])
            return of({error: false, message: ''})
        }
    }

    private hasDuplicates(points: Point[], compareTo: Point[]): boolean {
        return [new Set([...points, ...compareTo])].length === [...points, ...compareTo].length
    }

}
