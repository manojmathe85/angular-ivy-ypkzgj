import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular'; 
import { TotalValueRenderer } from './simplerender.component';
import {BttnCellRenderer} from './bttn-cell1-renderer.component';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([TotalValueRenderer,BttnCellRenderer]),
    NgbModule
  ], 
  providers: [
    BttnCellRenderer 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
