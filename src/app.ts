import 'reflect-metadata';

import sequelize from './db/connection';
import { webServer } from './services/web-server';

async function startup() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await webServer.initialize();
    console.log('started');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
async function shutdown(e?: Error) {
  let err = e;

  try {
    await webServer.close();
    await sequelize.close();
  } catch (e1) {
    err = err || e1;
  }

  return err ? process.exit(1) : process.exit(0);
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
