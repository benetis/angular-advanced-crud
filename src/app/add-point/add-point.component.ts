import {Component, OnInit} from '@angular/core';
import {PointService} from '../points-service.service';

@Component({
    selector: 'app-add-point',
    templateUrl: './add-point.component.html',
    styleUrls: ['./add-point.component.scss']
})
export class AddPointComponent implements OnInit {

    public x: number;
    public y: number;

    constructor(private pointsService: PointService) {
    }

    ngOnInit() {
    }

    public addPoint(x: number, y: number) {
        this.pointsService.addPoints([{x, y}])
    }

}
