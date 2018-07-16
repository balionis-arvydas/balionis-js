import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { ActivatedRoute, Params} from '@angular/router';

import { LoggerService, LoggerLevel } from './core/logger.service';
import { ConfigService, Config } from './core/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MyApp';

  settings = '';

  constructor(
    private route: ActivatedRoute,
    private logger: LoggerService,
    private configService: ConfigService) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {
      const p = params[LoggerService.loggerLevelParam];
      if (!isNaN(p)) {
        let l = +p; // parse into number
        this.logger.setLevel(l);
        let s = LoggerLevel[this.logger.getLevel()];
        this.logger.info(`logLevel is now [${s}]`);
      }

    });

    this.configService.getSettings()
      .subscribe(
        (data: Config) => {
          this.settings = JSON.stringify(data);
        },
        error => {
          this.logger.error("cannot read config", error);
          this.settings = '{}';
        });
  }
}
