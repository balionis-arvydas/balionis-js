import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-adder-component',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent {

  private message: String;

  @Output()
  add = new EventEmitter();

  constructor() {
    this.message = '';
  }

  public onKey(event: any) {
    console.log('onKey: value=' + event.target.value);
    this.message = event.target.value;
  }

  public onClick() {
    console.log('onClick: message=' + this.message);
    this.add.emit(this.message);
    this.message = '';
  }
}
