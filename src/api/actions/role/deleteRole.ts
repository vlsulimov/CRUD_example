import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { DeleteRoleParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../typesGlobal';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { deleteOneRoleById } from '../../methods/role.methods';

export const deleteRole: IActionSchema = {
  route: '/role/:id',
  method: 'DELETE',
  validate: getSchema(DeleteRoleParams),
  controller: async (
    req: express.Request<DeleteRoleParams>,
    res: express.Response<IServiceResponse<null>>,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      await deleteOneRoleById(id);

      res.json(ResponseFactory.createServiceSuccessResponse());
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};