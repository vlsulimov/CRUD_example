import express from 'express';

import { IAction, IdParam } from '../../../../lib';

import { IRole } from '../../../../types';

import { findOneRoleById } from '../../methods/role';

export const getRole: IAction<IRole> = {
  route: '/role/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneRoleById(req.params.id),
};
