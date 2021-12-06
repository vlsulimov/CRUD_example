import http from 'http';
import express from 'express';
import helmet from 'helmet';

import { log } from '../../utilsGlobal/logger';
import { BaseResponseError, ResponseFactory } from '../../utilsGlobal';
import { IWebServerConfig } from '../../lib';
import router from '../api/router';

const webServerConfig: IWebServerConfig = {
  port: process.env.HTTP_PORT || 3001,
};

class WebServer {
  private app: express.Application;
  private httpServer: http.Server;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
  }

  public initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app.use(express.json());
      this.app.use(
        express.urlencoded({
          extended: true,
        })
      );
      this.app.use(helmet());
      this.app.use((req: express.Request, _res: express.Response) => log.routes(req.statusCode));

      this.app.use('/api', router);

      this.app.use(
        (
          err: BaseResponseError,
          _req: express.Request,
          res: express.Response,
          _next: express.NextFunction
        ) => {
          res.status(err.statusCode);
          res.json(ResponseFactory.createServiceErrorResponse(err));
        }
      );

      this.httpServer
        .listen(webServerConfig.port)
        .on('listening', () => {
          resolve();
        })
        .on('error', (err: Error) => {
          reject(err);
        });
    });
  }

  public close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpServer.close((err?: Error) => (err ? reject(err) : resolve()));
    });
  }

  public getHttpServer() {
    return this.httpServer;
  }
}

export const webServer: WebServer = new WebServer();
