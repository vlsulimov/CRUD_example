import {
  IUser,
  IUserFull,
  PostRoleToUserParams,
  PostUserParams,
  CrudServiceErrors,
} from '../../../types';
import { NotFoundResponseError } from '../../../utilsGlobal';
import { CrudServiceErrorObjects } from '../../utils';

import { RoleRepository, UserRepository, UserRoleRepository } from '../repository';

export async function findAllUsers() {
  const users = await UserRepository.findAll();

  const resultUsers: IUser[] = users.map(x => ({
    id: x.id,
    firstName: x.firstName,
    lastName: x.lastName,
    phone: x.phone,
  }));

  return resultUsers;
}

export async function findOneUserById(id) {
  const [user] = await UserRepository.findAllById(id);

  if (!user) {
    throw new NotFoundResponseError(
      CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]
    );
  }
  const resultUser: IUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  };

  return resultUser;
}

export async function findOneUserWithRolesById(id) {
  const [user] = await UserRepository.findAllWithRolesById(id);

  if (!user) {
    throw new NotFoundResponseError(
      CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]
    );
  }
  const resultUser: IUserFull = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    roles: user.roles.map(x => ({ id: x.id, alias: x.alias, name: x.name })),
  };

  return resultUser;
}

export async function createUser(createParams: PostUserParams) {
  const user = await UserRepository.createOne(createParams);
  const resultUser: IUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  };

  return resultUser;
}

export async function deleteOneUserById(id: number) {
  const [user] = await UserRepository.findAllById(id);

  if (!user) {
    throw new NotFoundResponseError(
      CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]
    );
  }

  return await UserRepository.destroyById(id);
}

export async function addRoleToUser(params: PostRoleToUserParams) {
  const [user] = await UserRepository.findAllById(params.userId);
  const [role] = await RoleRepository.findAllById(params.roleId);

  if (!user || !role) {
    throw new NotFoundResponseError(
      CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]
    );
  }
  await UserRoleRepository.createOne(params);

  return await findOneUserWithRolesById(params.userId);
}
