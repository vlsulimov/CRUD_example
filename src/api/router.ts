import * as express from 'express';

import * as actions from './actions';
import { Validator } from '../../utilsGlobal/Validator';

const router: express.Router = express.Router();
const BASE_URL = '/crud/v1';

Object.values(actions).forEach(action => {
  switch (action.method) {
    case 'GET':
      router.get(
        BASE_URL + action.route,
        Validator.getExpressValidator(action.validate),
        action.controller
      );
      break;
    case 'POST':
      router.post(
        BASE_URL + action.route,
        Validator.getExpressValidator(action.validate),
        action.controller
      );
      break;
    case 'DELETE':
      router.delete(
        BASE_URL + action.route,
        Validator.getExpressValidator(action.validate),
        action.controller
      );
      break;
    case 'PATCH':
      router.patch(
        BASE_URL + action.route,
        Validator.getExpressValidator(action.validate),
        action.controller
      );
      break;
    case 'PUT':
      router.put(
        BASE_URL + action.route,
        Validator.getExpressValidator(action.validate),
        action.controller
      );
      break;
    default:
      throw new Error('incorrect actionMethod');
  }
});

export default router;
