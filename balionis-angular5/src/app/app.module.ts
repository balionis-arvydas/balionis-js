import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppTableComponent } from './components/app-table.component';
import { AppTableDatasource } from './components/app-table-datasource';
import { AppTableColumnComponent } from './components/app-table-column.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppTableColumnComponent,
    AppTableComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    AppTableColumnComponent
  ],
  providers: [AppTableDatasource],
  bootstrap: [AppComponent]
})
export class AppModule { }
