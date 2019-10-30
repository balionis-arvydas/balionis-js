import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BalionisAngular9LibModule } from 'balionis-angular9-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BalionisAngular9LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
