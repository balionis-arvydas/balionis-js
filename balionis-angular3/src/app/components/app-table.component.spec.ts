import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppTableComponent } from './app-table.component';
import { AppTableColumnComponent } from './renderers/app-table-column/app-table-column.component';

describe('AppTableComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppTableComponent,
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

  it('should create the app table', () => {
    const fixture = TestBed.createComponent(AppTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render grid header with 3 columns', () => {
    const fixture = TestBed.createComponent(AppTableComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const headerNodes = compiled.querySelectorAll('.ag-header-cell-text');
    const headers: string[] = Array.from(headerNodes).map(header => header.textContent);

    expect(headers).toEqual(['Make', 'Model', 'Price']);
  });

});
