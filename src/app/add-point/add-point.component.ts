import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PointService, PSResponse} from '../points-service.service';
import {Point} from '../points-table/points-table.component';

@Component({
    selector: 'app-add-point',
    templateUrl: './add-point.component.html',
    styleUrls: ['./add-point.component.scss']
})
export class AddPointComponent implements OnInit {

    @Output() addPoints: EventEmitter<Point[]> = new EventEmitter()

    public x: number = 0
    public y: number = 0

    @Input() public response: PSResponse = {error: false, message: ''}

    constructor() {
    }

    ngOnInit() {
    }

    public addPoint() {
        this.addPoints.emit([{x: this.x, y: this.y}])
    }

}
