import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Point} from '../points-table/points-table.component';
import {PSResponse} from '../points-service.service';

@Component({
    selector: 'app-favorite-points',
    templateUrl: './favorite-points.component.html',
    styleUrls: ['./favorite-points.component.scss']
})
export class FavoritePointsComponent implements OnInit {

    @Input() selected: Point[] = []
    @Input() public response: PSResponse = {error: false, message: ''}
    @Output() setPoints: EventEmitter<Point[]> = new EventEmitter()

    public selectedListName: string = ''

    public savedListsOfPoints: { [key: string]: Point[] } = {}

    constructor() {
    }

    ngOnInit() {
    }

    public saveList(listName) {
        this.savedListsOfPoints[listName] = [...this.selected]
    }

    public deleteList() {
        if (this.selectedListName !== '') {
            delete this.savedListsOfPoints[this.selectedListName]
        }
    }

    public loadList() {
        this.setPoints.emit(this.savedListsOfPoints[this.selectedListName])
    }

    public keys(obj) {
        return Object.keys(obj)
    }

}
