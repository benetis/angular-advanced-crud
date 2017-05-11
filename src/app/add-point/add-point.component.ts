import {Component, OnInit} from '@angular/core';
import {PointService} from '../points-service.service';

@Component({
    selector: 'app-add-point',
    templateUrl: './add-point.component.html',
    styleUrls: ['./add-point.component.sass']
})
export class AddPointComponent implements OnInit {

    constructor(private pointsService: PointService) {
    }

    ngOnInit() {
    }

    public addPoint(x: number, y: number) {
        this.pointsService.addPoints([{x, y}])
    }

}
