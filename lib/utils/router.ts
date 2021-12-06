import * as express from 'express';

import { Validator, IAction, ResponseFactory } from '..';

export function getRouter(actions: Record<string, IAction>, baseUrl: string) {
  const router: express.Router = express.Router();

  Object.values(actions).forEach(action => {
    const url = `${baseUrl}${action.route}`;

    const controller = async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const result = await action.controller(req);

        res.json(ResponseFactory.createServiceSuccessResponse(result));
      } catch (err) {
        next(err);
      }
    };

    router[action.method.toLowerCase()](
      url,
      Validator.getExpressValidator(action.validate),
      controller
    );
  });

  return router;
}
