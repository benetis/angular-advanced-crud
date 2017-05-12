import {Component, OnDestroy, OnInit} from '@angular/core';
import {PointService, PSResponse} from '../points-service.service';

@Component({
    selector: 'app-add-point',
    templateUrl: './add-point.component.html',
    styleUrls: ['./add-point.component.scss']
})
export class AddPointComponent implements OnInit, OnDestroy {

    public x: number = 0
    public y: number = 0

    public response: PSResponse = {error: false, message: ''}

    private sub: any;

    constructor(private pointsService: PointService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    public addPoint() {
        this.sub = this.pointsService.addPoints(
            [{x: this.x, y: this.y}]
        ).subscribe(_ => this.response = _[0])
    }

}
