import express from 'express';

import { IServiceResponse } from '.';

export interface IAction {
  route: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  validate?: any;
  controller(
    req: express.Request<any>,
    res: express.Response<IServiceResponse<any>>,
    next: express.NextFunction
  );
}
