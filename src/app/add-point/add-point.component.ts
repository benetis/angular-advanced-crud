import {Component, OnInit} from '@angular/core';
import {PointService} from '../points-service.service';

@Component({
    selector: 'app-add-point',
    templateUrl: './add-point.component.html',
    styleUrls: ['./add-point.component.scss']
})
export class AddPointComponent implements OnInit {

    public x: number = 0
    public y: number = 0

    constructor(private pointsService: PointService) {
    }

    ngOnInit() {
    }

    public addPoint() {
        this.pointsService.addPoints(
            [{x: this.x, y: this.y,}]
        )
    }

}
