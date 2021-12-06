import { IRole, IUser, IUserFull } from '../../types';

import { Role, User } from '../db/models';

export const roleFormatter = (role: Role): IRole => ({
  id: role.id,
  alias: role.alias,
  name: role.name,
});

export const userFormatter = (user: User): IUser => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phone: user.phone,
});

export const userWithRolesFormatter = (user: User): IUserFull => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phone: user.phone,
  roles: user.userRoles.map(({ role }) => ({ id: role.id, alias: role.alias, name: role.name })),
});
