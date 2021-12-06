import express from 'express';

import { IAction } from '../../../../lib';

import { IRole, PostRoleParams } from '../../../../types';

import { createRole } from '../../methods/role';

export const postRole: IAction<IRole> = {
  route: '/role',
  method: 'POST',
  validate: PostRoleParams.schema,
  controller: (req: express.Request<PostRoleParams>) => createRole(req.params),
};
