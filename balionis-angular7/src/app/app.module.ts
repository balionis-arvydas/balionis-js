import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppTableComponent } from './components/app-table.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppTableComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
