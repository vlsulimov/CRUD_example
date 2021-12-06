import { IAction } from '../../../../lib';

import { IUser } from '../../../../types';

import { findAllUsers } from '../../methods/user';

export const getUsers: IAction<IUser[]> = {
  route: '/user',
  method: 'GET',
  controller: () => findAllUsers(),
};
