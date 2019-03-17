import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppTableComponent } from './components/app-table.component';
import { AppTableColumnComponent } from './components/renderers/app-table-column/app-table-column.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppTableComponent,
    AppTableColumnComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    AppTableColumnComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
