import { webServer } from '../../services/web-server';
import request from 'supertest';

const BASE_URL = '/api/crud/v1';
export function call<T>(url: string, actionMethod: string) {
  return async (params?: T) => {
    const httpServer = webServer.getHttpServer();
    let req: request.Response;

    switch (actionMethod) {
      case 'GET':
        req = await request(httpServer)
          .get(BASE_URL + url)
          .send(params as any);
        break;
      case 'POST':
        req = await request(httpServer)
          .post(BASE_URL + url)
          .send(params as any);
        break;
      case 'DELETE':
        req = await request(httpServer)
          .delete(BASE_URL + url)
          .send(params as any);
        break;
      case 'PATCH':
        req = await request(httpServer)
          .patch(BASE_URL + url)
          .send(params as any);
        break;
      case 'PUT':
        req = await request(httpServer)
          .put(BASE_URL + url)
          .send(params as any);
        break;
      default:
        throw new Error('incorrect actionMethod');
    }

    return req!;
  };
}
