import {Injectable} from '@angular/core';
import {PointService} from './points-service.service';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface Square {
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
}

@Injectable()
export class SquaresService {

    private squares = new BehaviorSubject({})


    constructor(private pointsService: PointService) {
    }

    public getSquares(): Observable<Square> {
        return this.squares
    }

    public findSquares(): boolean {

        const p1 = {x: 0, y: 0}
        const p2 = {x: 1, y: 0}
        const p3 = {x: 0, y: 1}
        const p4 = {x: 1, y: 1}
        this.squares.next({p1, p2, p3, p4})

        return true;
    }

}
