import fastestValidator from 'fastest-validator';
import express from 'express';

import { ValidationResponseError } from './ResponseFactory';
import { CrudServiceErrorObjects } from '../src/utils';
import { CrudServiceErrors } from '../types';

export class Validator {
  static getExpressValidator(schema) {
    return async (req: express.Request, _res: express.Response, next: express.NextFunction) => {
      if (!schema) {
        return next();
      }
      const fullObject = { ...req.body, ...req.query, ...req.params };
      const check = new fastestValidator().compile(schema);
      const result = check(fullObject);
      if (result === true) {
        req.params = fullObject;
        return next();
      } else {
        const errorObject =
          CrudServiceErrorObjects[CrudServiceErrors.validationError];
        return next(
          new ValidationResponseError({
            code: errorObject.code,
            message: `${errorObject.message}: ${JSON.stringify(result)}`,
          })
        );
      }
    };
  }
}
