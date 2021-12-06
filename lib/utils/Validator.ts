import fastestValidator, { ValidationSchema } from 'fastest-validator';
import express from 'express';

import { ValidationResponseError, GlobalErrors, GlobalErrorObjects } from '..';

export class Validator {
  static getExpressValidator(schema: ValidationSchema) {
    return async (req: express.Request, _res: express.Response, next: express.NextFunction) => {
      const fullObject = { ...req.body, ...req.query, ...req.params };

      if (!schema) {
        return next();
      }

      const check = new fastestValidator().compile(schema);
      const result = check(fullObject);

      if (result === true) {
        req.params = fullObject;
        return next();
      }

      return next(
        new ValidationResponseError(GlobalErrorObjects[GlobalErrors.validationError], result)
      );
    };
  }
}
