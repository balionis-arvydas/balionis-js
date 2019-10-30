import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalionisAngular9LibModule } from 'balionis-angular9-lib';

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
