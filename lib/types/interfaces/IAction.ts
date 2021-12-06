import express from 'express';

export interface IAction<T = any> {
  route: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  validate?: any;
  controller(req: express.Request<any>): T | Promise<T>;
}
