import {Component} from '@angular/core';
import {PointService} from './points-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private pointService: PointService) {
    }

    public fileUploaded(contents: any[]) {
        console.log(contents)
        this.pointService.addPoints(contents)
    }
}
