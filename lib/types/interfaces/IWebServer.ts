import http from 'http';

export interface IWebServer {
    initialize(): Promise<void>;
    close(): Promise<void>;

    get httpServer(): http.Server;
  }

