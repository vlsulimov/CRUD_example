import 'reflect-metadata';

import { log } from '../lib';

import sequelize from './db/connection';
import { webServer } from './services/web-server';

async function startup() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await webServer.initialize();

    log.debug('Service started');
  } catch (err: any) {
    log.error(err);
    process.exit(1);
  }
}
async function shutdown(e?) {
  let err = e;

  try {
    await webServer.close();
    await sequelize.close();
  } catch (e1: any) {
    err = err || e1;
  }

  if (err) {
    log.error(err);
    return process.exit(1);
  }

  return process.exit(0);
}

process.on('SIGTERM', () => {
  shutdown();
});

process.on('SIGINT', () => {
  shutdown();
});

process.on('uncaughtException', (err: Error) => {
  shutdown(err);
});

startup();
