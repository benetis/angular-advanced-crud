import {Component} from '@angular/core';
import {PointService, PSResponse} from './points-service.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    public importResponses$: Observable<PSResponse[]> = of([])

    constructor(private pointService: PointService) {
    }

    public fileUploaded(contents: any[]) {
        this.importResponses$ = this.pointService.addPoints(contents)
    }
}
