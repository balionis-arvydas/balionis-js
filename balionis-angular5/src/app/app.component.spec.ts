import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AppTableComponent } from './components/app-table.component';
import { AppTableColumnComponent } from './components/renderers/app-table-column/app-table-column.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'balionis-angular5'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('balionis-angular5');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to balionis-angular5!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to balionis-angular5!');
  });

});
