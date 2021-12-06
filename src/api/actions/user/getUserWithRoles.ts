import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IUserFull, GetUserParams } from '../../../../types';
import { IAction, IServiceResponse } from '../../../../lib';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { findOneUserWithRolesById } from '../../methods/user.methods';

export const getUserWithRoles: IAction = {
  route: '/user-with-roles/:id',
  method: 'GET',
  validate: getSchema(GetUserParams),
  controller: async (
    req: express.Request<GetUserParams>,
    res: express.Response<IServiceResponse<IUserFull>>,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      const user = await findOneUserWithRolesById(id);

      res.json(ResponseFactory.createServiceSuccessResponse(user));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
