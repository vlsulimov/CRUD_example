import express from 'express';

import { IAction, IdParam } from '../../../../lib';

import { deleteOneRoleById } from '../../methods/role';

export const deleteRole: IAction<null> = {
  route: '/role/:id',
  method: 'DELETE',
  validate: IdParam.schema,
  controller: async (req: express.Request<IdParam>) => {
    await deleteOneRoleById(req.params.id);

    return null;
  },
};
