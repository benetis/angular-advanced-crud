import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type PaginationOptions = 5 | 10 | 20 | 50

@Component({
    selector: 'app-table-pagination-options',
    templateUrl: './table-pagination-options.component.html',
    styleUrls: ['./table-pagination-options.component.scss']
})
export class TablePaginationOptionsComponent implements OnInit {

    public paginateBy: PaginationOptions = 5

    @Output()
    public paginate = new EventEmitter()

    public readonly options = [5, 10, 20, 50]

    constructor() {
    }

    ngOnInit() {
    }

    public selected(e) {
        this.paginate.emit(this.paginateBy)
    }

}
