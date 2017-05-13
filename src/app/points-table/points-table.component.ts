import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PointService} from '../points-service.service';
import {PaginationOptions} from '../table-pagination-options/table-pagination-options.component';
import {of} from 'rxjs/observable/of';

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

    public paginateBy: PaginationOptions = 5;

    @Output() pointsSelected: EventEmitter<Point[]> = new EventEmitter();
    private selected: Point[] = []

    constructor(private pointsService: PointService,
                private ref: ChangeDetectorRef) {
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

    public paginationChanged(paginateBy) {
        this.paginateBy = paginateBy
    }
}
