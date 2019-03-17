import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppTableColumnComponent } from './app-table-column.component';

describe('AppTableComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppTableColumnComponent
      ],
      imports: [
        AgGridModule.withComponents([])
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AppTableColumnComponent]
      }
    }).compileComponents();

  }));

  it('should create the app table column', () => {
    const fixture = TestBed.createComponent(AppTableColumnComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
