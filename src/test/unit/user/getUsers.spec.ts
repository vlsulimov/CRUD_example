import { UserRepository } from '../../../api/repository';
import { call } from '../../helpers/actionCall';
import { testService } from '../../helpers/initService';

describe('Test getUsers action', () => {
  const getUsers = call('/user', 'GET');

  beforeAll(async done => {
    await testService.init();
    done();
  });

  it('should return list of users', async () => {
    const users = await Promise.all([
      UserRepository.createOne({ firstName: 'Иван', lastName: 'Иванов', phone: null }),
      UserRepository.createOne({ firstName: 'Петр', lastName: 'Петров', phone: '+79000000000' }),
    ]);
    const { statusCode, body } = await getUsers({});

    expect(statusCode).toBe(200);
    expect(body.data).toMatchObject(
      users.map(x => ({ id: x.id, firstName: x.firstName, lastName: x.lastName, phone: x.phone }))
    );
  });

  afterAll(async done => {
    testService.close();
    done();
  });
});
