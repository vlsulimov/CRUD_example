import sequelize from '../../src/db/connection';
// import * as models from '../../src/db/models';
import { webServer } from '../../src/services/web-server';

class TestService {
    async init() {
        await sequelize.authenticate();
        await sequelize.sync();
        await webServer.initialize();
    }

    async close() {
        await webServer.close();
        await sequelize.close();
    }
}

async function clearDb() {
    sequelize.drop();
    // await sequelize.query('SET FOREIGN_KEY_CHECKS=0;');

    // await Promise.all(Object.values(models)
    //     .map(model => sequelize.query(`delete from ${model.getTableName()};`)));

    // await sequelize.query('SET FOREIGN_KEY_CHECKS=1;');
}

export function initService() {
    const testService = new TestService();

    beforeAll(async done => {
        await testService.init();
        done();
    });
    afterAll(async done => {
        await testService.close();
        done();
    });

    beforeEach(() => clearDb());
}
