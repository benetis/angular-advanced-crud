import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import {of} from 'rxjs/observable/of';
export interface PSResponse { message: string, error: boolean
}

@Injectable()
export class PointService {

    private points = new BehaviorSubject([])
    private _points: Point[] = []

    constructor() {
        this.points.subscribe(_ => {
            this._points = _
        })
    }

    public getPoints(): Observable<Point[]> {
        return this.points;
    }

    public addPoints(pointsToAdd: Point[]): Observable<PSResponse[]> {
        const limit = 10000
        const currentSize = this._points.length
        const union = _.differenceWith(pointsToAdd, this._points, (a: Point, b: Point) => {
            return _.isEqual({x: a.x, y: a.y}, {x: b.x, y: b.y})
        })
        const xor = _.isEqual(union, this._points) ? [] : union

        const duplicates = _.intersectionWith(this._points, pointsToAdd, _.isEqual)
            .map(p => ({error: true, message: 'duplicate'}))

        const toAddSize = pointsToAdd.length
        const overLimit: boolean = (currentSize + toAddSize) > limit
        if (overLimit) {
            const canBeImported: number = Math.abs(limit - currentSize - toAddSize)
            this.points.next([...this._points, ...union.slice(0, canBeImported)])

            return of([
                ...duplicates,
                {error: true, message: 'over limit'}
            ])
        } else {
            this.points.next(this._points.concat(xor))
            return of([
                ...duplicates,
            ])
        }

    }

}
