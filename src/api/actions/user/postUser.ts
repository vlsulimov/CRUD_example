import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IUser, PostUserParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../typesGlobal';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { createUser } from '../../methods/user.methods';

export const postUser: IActionSchema = {
  route: '/user',
  method: 'POST',
  validate: getSchema(PostUserParams),
  controller: async (
    req: express.Request<PostUserParams>,
    res: express.Response<IServiceResponse<IUser>>,
    next: express.NextFunction
  ) => {
    try {
      const user = await createUser(req.params);

      res.json(ResponseFactory.createServiceSuccessResponse(user));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
