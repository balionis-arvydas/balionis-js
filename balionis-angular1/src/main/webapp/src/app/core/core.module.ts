import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService, ConsoleLoggerService } from './logger.service';
import { ConfigService } from './config.service';

const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.getSettings();
  };
};

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
