import { Injectable }  from '@angular/core';

import { LoggerLevel } from './loggerLevel';
export { LoggerLevel } from './loggerLevel';

const noop = (): any => undefined;

@Injectable({
  providedIn: 'root',
})
export abstract class LoggerService {

  public static readonly loggerLevelParam = 'loggerLevel';

  private level: LoggerLevel = LoggerLevel.Error;

  constructor(level:LoggerLevel){
    this.level = level;
  }

  getLevel():LoggerLevel {
    return this.level;
  }

  setLevel(level:number) {
    this.level = (level > LoggerLevel.Debug ? LoggerLevel.Debug : (level < LoggerLevel.Error ? LoggerLevel.Error : level));
  }

  debug: any;
  info:  any;
  warn:  any;
  error: any;
}

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggerService extends LoggerService {

  constructor(){
     super(LoggerLevel.Warn);
  }

  get debug() {
    if (this.getLevel() >= LoggerLevel.Debug) {
      return console.log.bind(console);
    } else {
      return noop;
    }
  }

  get info() {
    if (this.getLevel() >= LoggerLevel.Info) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (this.getLevel() >= LoggerLevel.Warn) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (this.getLevel() >= LoggerLevel.Error) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }
}
