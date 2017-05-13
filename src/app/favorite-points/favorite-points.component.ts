import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../points-table/points-table.component';

@Component({
    selector: 'app-favorite-points',
    templateUrl: './favorite-points.component.html',
    styleUrls: ['./favorite-points.component.scss']
})
export class FavoritePointsComponent implements OnInit {

    @Input() selected: Point[] = []

    public savedListsOfPoints: { [key: string]: Point[] } = {}

    constructor() {
    }

    ngOnInit() {
    }

    public saveList(listName) {
        this.savedListsOfPoints[listName] = this.selected
    }

    public keys(obj) {
        return Object.keys(obj)
    }

}
