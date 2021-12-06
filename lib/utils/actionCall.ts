import request from 'supertest';

import { IWebServer } from '..';

export function actionCall(server: IWebServer) {
  return function call<T>(url: string, actionMethod: string) {
    return async (params?: T, pathParam?: string | number) => {
      const { httpServer } = server;
      const urlFull = url + (pathParam ? `/${pathParam}` : '');

      return request(httpServer)
        [actionMethod.toLocaleLowerCase()](urlFull)
        .send(params as any);
    };
  };
}
