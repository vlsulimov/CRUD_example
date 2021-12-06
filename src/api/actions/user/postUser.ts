import express from 'express';

import { IAction } from '../../../../lib';

import { IUser, PostUserParams } from '../../../../types';

import { createUser } from '../../methods/user';

export const postUser: IAction<IUser> = {
  route: '/user',
  method: 'POST',
  validate: PostUserParams.schema,
  controller: (req: express.Request<PostUserParams>) => createUser(req.params),
};
