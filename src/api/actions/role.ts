import express from 'express';

import { IAction, IdParam } from '../../../lib';

import { createRole, deleteOneRoleById, findAllRoles, findOneRoleById } from '../methods/role';

import { IRole, PostRoleParams } from '../../../types';

export const deleteRole: IAction<null> = {
  route: '/role/:id',
  method: 'DELETE',
  validate: IdParam.schema,
  controller: async (req: express.Request<IdParam>) => {
    await deleteOneRoleById(req.params.id);

    return null;
  },
};

export const getRole: IAction<IRole> = {
  route: '/role/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneRoleById(req.params.id),
};

export const getRoles: IAction<IRole[]> = {
  route: '/role',
  method: 'GET',
  controller: () => findAllRoles(),
};

export const postRole: IAction<IRole> = {
  route: '/role',
  method: 'POST',
  validate: PostRoleParams.schema,
  controller: (req: express.Request<PostRoleParams>) => createRole(req.params),
};
