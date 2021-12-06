import { NotFoundResponseError } from '../../../lib';

import { IRole, PostRoleParams, CrudServiceErrors } from '../../../types';

import { CrudServiceErrorObjects, roleFormatter } from '../../utils';
import { RoleRepository } from '../repository';

export async function findAllRoles(): Promise<IRole[]> {
  const roles = await RoleRepository.findAll();

  return roles.map(x => roleFormatter(x));
}

export async function findOneRoleById(id: number): Promise<IRole> {
  const role = await RoleRepository.findOneById(id);

  if (!role) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  return roleFormatter(role);
}

export async function createRole(createParams: PostRoleParams): Promise<IRole> {
  const role = await RoleRepository.createOne(createParams);

  return roleFormatter(role);
}

export async function deleteOneRoleById(id: number) {
  const role = await RoleRepository.findOneById(id);

  if (!role) {
    throw new NotFoundResponseError(CrudServiceErrorObjects[CrudServiceErrors.RowNotFound]);
  }

  return RoleRepository.destroyById(id);
}

