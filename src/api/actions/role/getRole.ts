import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { IRole, GetRoleParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../typesGlobal';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { findOneRoleById } from '../../methods/role.methods';

export const getRole: IActionSchema = {
  route: '/role/:id',
  method: 'GET',
  validate: getSchema(GetRoleParams),
  controller: async (
    req: express.Request<GetRoleParams>,
    res: express.Response<IServiceResponse<IRole>>,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      const role = await findOneRoleById(id);

      res.json(ResponseFactory.createServiceSuccessResponse(role));
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
