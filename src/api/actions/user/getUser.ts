import express from 'express';

import { IAction, IdParam } from '../../../../lib';

import { IUser } from '../../../../types';

import { findOneUserById } from '../../methods/user';

export const getUser: IAction<IUser> = {
  route: '/user/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneUserById(req.params.id),
};
