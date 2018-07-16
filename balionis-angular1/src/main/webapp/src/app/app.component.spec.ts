import { TestBed, async } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';

import { LoggerService, ConsoleLoggerService } from './core/logger.service';

import { ConfigService, Config } from './core/config.service';

import { ActivatedRoute } from '@angular/router';

class ConfigServiceMock {

  constructor() {
  }

  getSettings():Observable<Config> {
    return Observable.create((observer) => {
      let result: Config = new Config('http://localhost:9090');

      observer.from(result);
    });
  }
};

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ id: 'test' }) }},
        { provide: LoggerService, useClass: ConsoleLoggerService },
        { provide: ConfigService, useClass: ConfigServiceMock }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MyApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MyApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MyApp!');
  }));
});
