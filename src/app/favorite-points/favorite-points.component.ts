import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../points-table/points-table.component';

@Component({
    selector: 'app-favorite-points',
    templateUrl: './favorite-points.component.html',
    styleUrls: ['./favorite-points.component.scss']
})
export class FavoritePointsComponent implements OnInit {

    @Input() selected: Point[] = []

    constructor() {
    }

    ngOnInit() {
    }

    public saveList(e) {
        console.log(this.selected)
    }

}
