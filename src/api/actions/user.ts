import express from 'express';

import { IAction, IdParam } from '../../../lib';

import {
  findOneUserById,
  deleteOneUserById,
  findAllUsers,
  findOneUserWithRolesById,
  addRoleToUser,
  createUser,
} from '../methods/user';

import { IUser, IUserFull, PostRoleToUserParams, PostUserParams } from '../../../types';

export const deleteUser: IAction<null> = {
  route: '/user/:id',
  method: 'DELETE',
  validate: IdParam.schema,
  controller: async (req: express.Request<IdParam>) => {
    await deleteOneUserById(req.params.id);

    return null;
  },
};

export const getUser: IAction<IUser> = {
  route: '/user/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneUserById(req.params.id),
};
export const getUsers: IAction<IUser[]> = {
  route: '/user',
  method: 'GET',
  controller: () => findAllUsers(),
};

export const getUserWithRoles: IAction<IUserFull> = {
  route: '/user-with-roles/:id',
  method: 'GET',
  validate: IdParam.schema,
  controller: (req: express.Request<IdParam>) => findOneUserWithRolesById(req.params.id),
};

export const postRoleToUser: IAction<IUserFull> = {
  route: '/role-to-user',
  method: 'POST',
  validate: PostRoleToUserParams.schema,
  controller: (req: express.Request<PostRoleToUserParams>) => addRoleToUser(req.params),
};

export const postUser: IAction<IUser> = {
  route: '/user',
  method: 'POST',
  validate: PostUserParams.schema,
  controller: (req: express.Request<PostUserParams>) => createUser(req.params),
};
