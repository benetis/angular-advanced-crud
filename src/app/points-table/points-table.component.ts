import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PointService} from '../points-service.service';

export interface Point {
    x: number;
    y: number;
}

@Component({
    selector: 'app-points-table',
    templateUrl: './points-table.component.html',
    styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {

    public points$: Observable<Point[]>;
    private selected: Point[] = []

    @Output() pointsSelected: EventEmitter<Point[]> = new EventEmitter();

    constructor(private pointsService: PointService) {
        this.points$ = pointsService.getPoints()
    }

    ngOnInit() {
    }

    public delete(e) {
        this.pointsService.deletePoints(this.selected)
        this.selected = []
    }

    public onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.pointsSelected.emit(this.selected)
    }
}
