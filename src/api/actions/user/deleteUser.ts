import express from 'express';

import { IAction, IdParam } from '../../../../lib';

import { deleteOneUserById } from '../../methods/user';

export const deleteUser: IAction<null> = {
  route: '/user/:id',
  method: 'DELETE',
  validate: IdParam.schema,
  controller: async (req: express.Request<IdParam>) => {
    await deleteOneUserById(req.params.id);

    return null;
  },
};
