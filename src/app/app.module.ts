import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PointsTableComponent} from './points-table/points-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PointService} from './points-service.service';
import {AddPointComponent} from './add-point/add-point.component';
import {CustomFormsModule} from 'ng2-validation';
import {ImportGatekeeperComponent} from './import-gatekeeper/import-gatekeeper.component';
import { FavoritePointsComponent } from './favorite-points/favorite-points.component';
import { TablePaginationOptionsComponent } from './table-pagination-options/table-pagination-options.component';
import { SquaresTableComponent } from './squares-table/squares-table.component';

@NgModule({
    declarations: [
        AppComponent,
        PointsTableComponent,
        AddPointComponent,
        ImportGatekeeperComponent,
        FavoritePointsComponent,
        TablePaginationOptionsComponent,
        SquaresTableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgxDatatableModule,
        CustomFormsModule
    ],
    providers: [PointService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
