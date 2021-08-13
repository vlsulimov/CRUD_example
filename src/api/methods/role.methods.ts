import { IRole, PostRoleParams, SubscriptionServiceErrors } from '../../../types';
import { NotFoundResponseError } from '../../../utilsGlobal';
import { subscriptionServiceErrorObjects } from '../../utils';
import { RoleRepository } from '../repository';

export async function findAllRoles() {
  const roles = await RoleRepository.findAll();

  const resultRoles: IRole[] = roles.map(x => ({
    id: x.id,
    alias: x.alias,
    name: x.name,
  }));

  return resultRoles;
}

export async function findOneRoleById(id) {
  const [role] = await RoleRepository.findAllById(id);

  if (!role) {
    throw new NotFoundResponseError(
      subscriptionServiceErrorObjects[SubscriptionServiceErrors.RowNotFound]
    );
  }
  const resultRole: IRole = {
    id: role.id,
    alias: role.alias,
    name: role.name,
  };

  return resultRole;
}

export async function createRole(createParams: PostRoleParams) {
  const role = await RoleRepository.createOne(createParams);
  const resultRole: IRole = {
    id: role.id,
    alias: role.alias,
    name: role.name,
  };

  return resultRole;
}

export async function deleteOneRoleById(id: number) {
  const [role] = await RoleRepository.findAllById(id);

  if (!role) {
    throw new NotFoundResponseError(
      subscriptionServiceErrorObjects[SubscriptionServiceErrors.RowNotFound]
    );
  }

  return await RoleRepository.destroyById(id);
}
