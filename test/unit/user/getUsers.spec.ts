import { IdParam } from '../../../lib';

import { userFactory } from '../../factories';
import { call, initService } from '../../helpers';

describe('Test getUsers action', () => {
  initService();
  const getUsers = call<IdParam>('/api/crud/user', 'GET');

  it('should return list of users', async () => {
    const users = await userFactory.bulkCreate(3);
    const { statusCode, body } = await getUsers();

    expect(statusCode).toBe(200);
    expect(body.data).toMatchObject(
      users.map(({ createdAt, updatedAt, ...userWithoutTimestamp }) => userWithoutTimestamp)
    );
  });
});
