import { ValidationError } from 'fastest-validator';

import {BaseResponseError} from '.';
import { IServiceErrorObject } from '../../..';

export class ValidationResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject, data?: ValidationError[] | unknown) {
    super(error.message, 400, error.code, data);
  }
}
