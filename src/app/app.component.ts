import {Component} from '@angular/core';
import {ImportExportTransformService} from './import-export-transform.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private importExportTransform: ImportExportTransformService) {
    }

    public fileUploaded(contents: any[]) {
        console.log(contents)
    }
}
