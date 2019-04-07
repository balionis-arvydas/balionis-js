import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { AppTableComponent } from './app-table.component';

describe('AppTableComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppTableComponent
      ],
      imports: [
        AgGridModule.withComponents([])
      ]
    }).compileComponents();

  }));

  it('should create the app table', () => {
    const fixture = TestBed.createComponent(AppTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
