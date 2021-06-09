import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import * as $ from 'jquery';
import { BtnCellRenderer } from './bttn-cell1-renderer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
