import {Component, OnDestroy, OnInit} from '@angular/core';
import {PaginationOptions} from '../table-pagination-options/table-pagination-options.component';
import {Square, SquaresService} from '../squares.service';
import {Subscription} from 'rxjs/Subscription';
import {Point} from '../points-table/points-table.component';

@Component({
    selector: 'app-squares-table',
    templateUrl: './squares-table.component.html',
    styleUrls: ['./squares-table.component.scss']
})
export class SquaresTableComponent implements OnInit, OnDestroy {

    public squares: Square[] = []

    private sub = new Subscription()

    constructor(private squaresService: SquaresService) {
        this.sub.add(
            this.squaresService.getSquares().subscribe(_ => {
                this.squares.push(_)
            }))
    }

    public paginateBy: PaginationOptions = 5;

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    public paginationChanged(paginateBy) {
        this.paginateBy = paginateBy
    }

    public findSquares(e) {
        !this.squaresService.findSquares()
    }

}
