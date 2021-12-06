import express from 'express';

import { IAction, IdParam } from '../../../../lib';

import { IUserFull } from '../../../../types';

import { findOneUserWithRolesById } from '../../methods/user';

export const getUserWithRoles: IAction<IUserFull> = {
  route: '/user-with-roles/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneUserWithRolesById(req.params.id),
};
