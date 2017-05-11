import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PointsTableComponent } from './points-table/points-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PointsServiceService} from './points-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PointsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule
  ],
  providers: [PointsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
