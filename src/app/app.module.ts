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

@NgModule({
    declarations: [
        AppComponent,
        PointsTableComponent,
        AddPointComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxDatatableModule,
        CustomFormsModule
    ],
    providers: [PointService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
