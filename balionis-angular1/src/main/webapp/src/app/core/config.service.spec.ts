import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { LoggerService, ConsoleLoggerService } from './logger.service';

import { ConfigService, Config } from './config.service';

describe('ConfigService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        { provide: LoggerService, useClass: ConsoleLoggerService },
        ConfigService
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    configService = TestBed.get(ConfigService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// ConfigService method tests begin ///

  describe('#getConfig', () => {
    let expectedConfig: Config;

    beforeEach(() => {
      configService = TestBed.get(ConfigService);
      expectedConfig = { apiUrl: "http://localhost:9090" } as Config;
    });

    it('should return expected config (called once)', () => {

      configService.getSettings().subscribe(
        config => expect(config).toEqual(expectedConfig, 'should return expected config'),
        fail
      );

      // ConfigService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(ConfigService.settingsUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedConfig);
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty heroes result', () => {

      configService.getSettings().subscribe(
        config => expect(config.apiUrl.length).toEqual(0, 'should return empty url'),
        fail
      );

      const req = httpTestingController.expectOne(ConfigService.settingsUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected config (called multiple times)', () => {

      configService.getSettings().subscribe();
      configService.getSettings().subscribe();
      configService.getSettings().subscribe(
        config => expect(config).toEqual(expectedConfig, 'should return expected config'),
        fail
      );

      const requests = httpTestingController.match(ConfigService.settingsUrl);
      expect(requests.length).toEqual(3, 'calls to getSettings()');

      // Respond to each request with different mock hero results
      requests[0].flush({});
      requests[1].flush({});
      requests[2].flush(expectedConfig);
    });
  });

});
