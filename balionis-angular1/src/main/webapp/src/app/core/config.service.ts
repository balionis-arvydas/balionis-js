import { Injectable, Inject }  from '@angular/core';
import { HttpClient }      from '@angular/common/http';
import {DOCUMENT}          from '@angular/platform-browser';
import { Observable, of }  from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Config } from './config';
export { Config } from './config';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public static readonly settingsUrl = 'config/settings';
  public static readonly apiHostnamePattern = '${apiHostname}';
  public static readonly apiPortPattern = '${apiPort}';

  constructor(private http: HttpClient,
     private logger: LoggerService,
     @Inject(DOCUMENT) private document) {
  }

  getSettings():Observable<Config> {
    return this.http.get<Config>(ConfigService.settingsUrl)
      .pipe(
        map(this.handleSuccess()),
        catchError(this.handleError<Config>('getConfig', new Config("")))
      );
  }

  private handleSuccess() {
    return (config:Config):Config => {
      if (config.apiUrl) {
        let hostname = this.document.location.hostname;
        config.apiUrl = config.apiUrl.replace(ConfigService.apiHostnamePattern, hostname);

        let port = this.document.location.port;
        if (port !== "") {
          config.apiUrl = config.apiUrl.replace(ConfigService.apiPortPattern, port);
        }
      }

      this.logger.info("config=", config);

      return config;
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.logger.warn(`${operation} failed with ${error.message}`, error);

      return of(result as T);
    };
  }
}
