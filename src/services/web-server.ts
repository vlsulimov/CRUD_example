import http from 'http';
import express from 'express';
import helmet from 'helmet';

import { IWebServerConfig, BaseResponseError, ResponseFactory, IWebServer, log } from '../../lib';

import router from '../api/router';

const webServerConfig: IWebServerConfig = {
  port: process.env.HTTP_PORT || 3001,
};

class WebServer implements IWebServer {
  private app: express.Application;
  private _httpServer: http.Server;

  constructor() {
    this.app = express();
    this._httpServer = http.createServer(this.app);
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
      this.app.use((req, res, next) => log.routes()(req, res, next));

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

      this._httpServer
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
      this._httpServer.close((err?: Error) => (err ? reject(err) : resolve()));
    });
  }

  public get httpServer() {
    return this._httpServer;
  }
}

export const webServer: WebServer = new WebServer();
