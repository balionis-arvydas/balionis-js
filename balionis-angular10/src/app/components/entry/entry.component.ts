import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-entry-component',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {

  @Input()
  message: String;

  @Input()
  index: Number;

  @Output()
  remove = new EventEmitter();

  public onClick() {
    console.log('onClick: message[' + this.index + ']=' + this.message);
    this.remove.emit(this.index);
  }
}
