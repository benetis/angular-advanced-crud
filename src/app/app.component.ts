import {Component, OnDestroy} from '@angular/core';
import {PointService, PSResponse} from './points-service.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Point} from './points-table/points-table.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    title = 'app works!';

    public importResponses$: Observable<PSResponse[]> = of([])
    public pointsSelected: Point[] = []

    public addPointsResponse: PSResponse = {error: false, message: ''}
    public setPointsResponse: PSResponse = {error: false, message: ''}

    private sub: Subscription = new Subscription()

    constructor(private pointService: PointService) {
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    public fileUploaded(contents: any[]) {
        this.importResponses$ = this.pointService.addPoints(contents)
    }

    public pointsSelectedChanged(points: Point[]) {
        this.pointsSelected = points
    }

    public setPoints(points: Point[]) {
        this.sub.add(
            this.pointService
                .setPoints(points)
                .subscribe(_ => this.setPointsResponse = _[0]))
    }

    public addPoints(points: Point[]) {
        this.sub.add(
            this.pointService
                .addPoints(points)
                .subscribe(_ => this.addPointsResponse = _[0]))
    }

}
