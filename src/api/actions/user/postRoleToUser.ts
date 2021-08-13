import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IUserFull, PostRoleToUserParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../typesGlobal';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { addRoleToUser } from '../../methods/user.methods';

export const postRoleToUser: IActionSchema = {
  route: '/role-to-user',
  method: 'POST',
  validate: getSchema(PostRoleToUserParams),
  controller: async (
    req: express.Request<PostRoleToUserParams>,
    res: express.Response<IServiceResponse<IUserFull>>,
    next: express.NextFunction
  ) => {
    try {
      const user = await addRoleToUser(req.params);

      res.json(ResponseFactory.createServiceSuccessResponse(user));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
