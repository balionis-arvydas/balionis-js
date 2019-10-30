import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalionisAngular9LibComponent } from './balionis-angular9-lib.component';

describe('BalionisAngular9LibComponent', () => {
  let component: BalionisAngular9LibComponent;
  let fixture: ComponentFixture<BalionisAngular9LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalionisAngular9LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalionisAngular9LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
