import { format, transports } from 'winston';
import winston from 'express-winston';

import { ILog, LogLevel } from '..';

class Logger {
  info(data: string | ILog) {
    return this.log(LogLevel.Info, data);
  }

  error(data: string | ILog) {
    return this.log(LogLevel.Error, data);
  }

  debug(data: string | ILog) {
    return this.log(LogLevel.Debug, data);
  }

  routes(): any {
    const { combine, timestamp, prettyPrint, json } = format;
    const winstonConfig = {
      level(_req, res){
        if (res.statusCode < 400){
          return 'info';
        }

        return 'error';
      },
      format: combine(timestamp(), prettyPrint(), json()),
      transports: [new transports.Console()],
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}} {{req.params}} {{req.headers}}',
      expressFormat: true,
      colorize: true,
      ignoreRoute: () => false,
    };

    return winston.logger(winstonConfig);
  }

  private format(level: LogLevel, data: string | ILog) {
    return JSON.stringify({
      ...(typeof data !== 'string' ? data : { message: data }),
      level,
    });
  }

  private log(level: LogLevel, data: string | ILog) {
    console.log(this.format(level, data));
  }
}

export const log = new Logger();
