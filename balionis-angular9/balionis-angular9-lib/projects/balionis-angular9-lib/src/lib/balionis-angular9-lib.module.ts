import { NgModule } from '@angular/core';
import { BalionisAngular9LibComponent } from './balionis-angular9-lib.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    BalionisAngular9LibComponent,
    FooComponent
  ],
  imports: [
  ],
  exports: [
    BalionisAngular9LibComponent,
    FooComponent
  ]
})
export class BalionisAngular9LibModule { }
