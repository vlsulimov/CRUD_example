import express from 'express';

import { IUser } from '../../../../types';
import { IAction, IServiceResponse } from '../../../../lib';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { findAllUsers } from '../../methods/user.methods';

export const getUsers: IAction = {
  route: '/user',
  method: 'GET',
  controller: async (
    _req: express.Request,
    res: express.Response<IServiceResponse<IUser[]>>,
    next: express.NextFunction
  ) => {
    try {
      const roles = await findAllUsers();

      res.json(ResponseFactory.createServiceSuccessResponse(roles));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
