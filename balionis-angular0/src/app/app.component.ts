import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: String;
  constructor() {
    this.title = 'MyApp1';
    console.log('title=' + this.title);
  }
}
