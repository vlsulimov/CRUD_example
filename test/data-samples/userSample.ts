import { Model } from 'sequelize-typescript';

import { User } from '../../src/db/models';

export const userSample: Omit<User, keyof Model | 'userRoles'> = {
    firstName: 'Name',
    lastName: 'LastName',
    phone: '+7900000000',
};
