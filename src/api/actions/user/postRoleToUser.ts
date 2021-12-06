import express from 'express';

import { IAction } from '../../../../lib';

import { IUserFull, PostRoleToUserParams } from '../../../../types';

import { addRoleToUser } from '../../methods/user';

export const postRoleToUser: IAction<IUserFull> = {
  route: '/role-to-user',
  method: 'POST',
  validate: PostRoleToUserParams.schema,
  controller: (req: express.Request<PostRoleToUserParams>) => addRoleToUser(req.params),
};
