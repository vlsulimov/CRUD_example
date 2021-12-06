import { NotFoundResponseError } from '../../../lib';

import {
  IUser,
  IUserFull,
  PostRoleToUserParams,
  PostUserParams,
  CrudServiceErrors,
} from '../../../types';

import { CrudServiceErrorObjects, userFormatter, userWithRolesFormatter } from '../../utils';

import { RoleRepository, UserRepository, UserRoleRepository } from '../repository';

export async function findAllUsers(): Promise<IUser[]> {
  const users = await UserRepository.findAll();

  return users.map(x => userFormatter(x));
}

export async function findOneUserById(id: number): Promise<IUser> {
  const user = await UserRepository.findOneById(id);

  if (!user) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  return userFormatter(user);
}

export async function findOneUserWithRolesById(id: number): Promise<IUserFull> {
  const user = await UserRepository.findOneWithRolesById(id);

  if (!user) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  return userWithRolesFormatter(user);
}

export async function createUser(createParams: PostUserParams): Promise<IUser> {
  const user = await UserRepository.createOne(createParams);

  return userFormatter(user);
}

export async function deleteOneUserById(id: number): Promise<void> {
  const user = await UserRepository.findOneById(id);

  if (!user) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  return UserRepository.destroyById(id);
}

export async function addRoleToUser(params: PostRoleToUserParams): Promise<IUserFull> {
  const user = await UserRepository.findOneById(params.userId);
  const role = await RoleRepository.findOneById(params.roleId);

  if (!user || !role) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  await UserRoleRepository.createOne(params);

  return findOneUserWithRolesById(params.userId);
}
