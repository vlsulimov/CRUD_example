import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IUser, GetUserParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../lib';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { findOneUserById } from '../../methods/user.methods';

export const getUser: IActionSchema = {
  route: '/user/:id',
  method: 'GET',
  validate: getSchema(GetUserParams),
  controller: async (
    req: express.Request<GetUserParams>,
    res: express.Response<IServiceResponse<IUser>>,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      const user = await findOneUserById(id);

      res.json(ResponseFactory.createServiceSuccessResponse(user));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
