import express from 'express';

import { IRole } from '../../../../types';
import { IAction, IServiceResponse } from '../../../../lib';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { findAllRoles } from '../../methods/role.methods';

export const getRoles: IAction = {
  route: '/role',
  method: 'GET',
  controller: async (
    _req: express.Request,
    res: express.Response<IServiceResponse<IRole[]>>,
    next: express.NextFunction
  ) => {
    try {
      const roles = await findAllRoles();

      res.json(ResponseFactory.createServiceSuccessResponse(roles));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
