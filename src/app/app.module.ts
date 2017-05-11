import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PointsTableComponent} from './points-table/points-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PointService} from './points-service.service';
import {AddPointComponent} from './add-point/add-point.component';
import {CustomFormsModule} from 'ng2-validation';
import {ImportGatekeeperComponent} from './import-gatekeeper/import-gatekeeper.component';
import {ImportExportTransformService} from './import-export-transform.service';

@NgModule({
    declarations: [
        AppComponent,
        PointsTableComponent,
        AddPointComponent,
        ImportGatekeeperComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxDatatableModule,
        CustomFormsModule
    ],
    providers: [PointService, ImportExportTransformService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
