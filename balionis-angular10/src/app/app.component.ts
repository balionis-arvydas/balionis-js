import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly title: String;

  readonly messages: String[];

  constructor() {
    this.title = 'MyApp10';
    console.log('title=' + this.title);
    this.messages = [];
  }

  private onAdd(message: String) {
    console.log('onAdd: message=' + message);
    this.messages.push(message);
  }

  private onRemove(index: Number) {
    console.log('onRemove: index=' + index);
    if (index < this.messages.length) {
      this.messages.splice(+index, 1);
    }
  }
}
