import {Injectable} from '@angular/core';
import {PointService} from './points-service.service';
import {Observable} from 'rxjs/Observable';
import {Point} from './points-table/points-table.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';

export interface Square {
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
}

@Injectable()
export class SquaresService {

    private squares = new BehaviorSubject({})

    private sub = new Subscription()

    constructor(private pointsService: PointService) {
    }

    public getSquares(): Observable<Square> {
        return this.squares
    }

    public findSquares(): boolean {
        this.sub.unsubscribe() // cleaning up previous subscription
        this.sub.add(
            this.pointsService.getPoints().subscribe(points => {
                for (let i = 0; i < points.length - 3; i++) {
                    const [p1, p2, p3, p4] = points.slice(i, i + 4)
                    if (this.isSquare( // Not using array destruction for performance
                            p1, p2, p3, p4
                        )) {
                        this.squares.next({p1, p2, p3, p4})
                    }
                }
            }))
        return true;
    }

    /** Taken from http://www.geeksforgeeks.org/check-given-four-points-form-square/ **/
    private isSquare(p1, p2, p3, p4): boolean {
        const d2 = this.distance(p1, p2);  // from p1 to p2
        const d3 = this.distance(p1, p3);  // from p1 to p3
        const d4 = this.distance(p1, p4);  // from p1 to p4

        // If lengths if (p1, p2) and (p1, p3) are same, then
        // following conditions must met to form a square.
        // 1) Square of length of (p1, p4) is same as twice
        //    the square of (p1, p2)
        // 2) p4 is at same this.distance from p2 and p3
        if (d2 === d3 && 2 * d2 === d4) {
            const d = this.distance(p2, p4);
            return (d === this.distance(p3, p4) && d === d2);
        }

        // The below two cases are similar to above case
        if (d3 === d4 && 2 * d3 === d2) {
            const d = this.distance(p2, p3);
            return (d === this.distance(p2, p4) && d === d3);
        }
        if (d2 === d4 && 2 * d2 === d3) {
            const d = this.distance(p2, p3);
            return (d === this.distance(p3, p4) && d === d2);
        }

        return false;
    }

    /** Taken from http://www.geeksforgeeks.org/check-given-four-points-form-square/ **/
    private distance(p, q) {
        return (p.x - q.x) * (p.x - q.x) +
            (p.y - q.y) * (p.y - q.y);
    }

}
