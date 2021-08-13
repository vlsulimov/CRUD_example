import express from 'express';
import { getSchema } from 'fastest-validator-decorators';

import { DeleteUserParams } from '../../../../types';
import { IActionSchema, IServiceResponse } from '../../../../typesGlobal';
import { BaseResponseError, ResponseFactory } from '../../../../utilsGlobal';

import { deleteOneUserById } from '../../methods/user.methods';

export const deleteUser: IActionSchema = {
  route: '/user/:id',
  method: 'DELETE',
  validate: getSchema(DeleteUserParams),
  controller: async (
    req: express.Request<DeleteUserParams>,
    res: express.Response<IServiceResponse<null>>,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      await deleteOneUserById(id);

      res.json(ResponseFactory.createServiceSuccessResponse());
    } catch (err) {
      if (err instanceof BaseResponseError) {
        next(err);
      }
      next(new BaseResponseError(err.message));
    }
  },
};
