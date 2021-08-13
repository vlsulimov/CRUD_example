import sequelize from '../../db/connection';
import { webServer } from '../../services/web-server';

export class TestService {
  public async init() {
    await sequelize.authenticate();
    await sequelize.sync();
    await webServer.initialize();
  }

  public async close() {
    await webServer.close();
    await sequelize.close();
  }
}

export const testService = new TestService();
