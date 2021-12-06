import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IRole, PostRoleParams } from '../../../../types';
import { IAction, IServiceResponse } from '../../../../lib';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { createRole } from '../../methods/role.methods';

export const postRole: IAction = {
  route: '/role',
  method: 'POST',
  validate: getSchema(PostRoleParams),
  controller: async (
    req: express.Request<PostRoleParams>,
    res: express.Response<IServiceResponse<IRole>>,
    next: express.NextFunction
  ) => {
    try {
      const role = await createRole(req.params);

      res.json(ResponseFactory.createServiceSuccessResponse(role));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
