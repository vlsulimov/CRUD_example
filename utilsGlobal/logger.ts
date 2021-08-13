import { format, transports } from 'winston';
import { logger, errorLogger } from 'express-winston';
const { combine, timestamp, prettyPrint, json } = format;

export const log = logger({
  format: combine(timestamp(), prettyPrint(), json()),
  transports: [new transports.Console()],
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{req.params}} {{req.headers}}',
  expressFormat: true,
  colorize: true,
  ignoreRoute: () => false,
});

export const ErrorLog = errorLogger({
  format: combine(timestamp(), prettyPrint(), json()),
  transports: [new transports.Console()],
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{req.params}} {{req.headers}}',
});
