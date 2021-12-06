import { IRole } from '../../../../types';

import { IAction } from '../../../../lib';

import { findAllRoles } from '../../methods/role';

export const getRoles: IAction<IRole[]> = {
  route: '/role',
  method: 'GET',
  controller: () => findAllRoles(),
};
