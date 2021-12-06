import { ValidationError } from 'fastest-validator';

import { IServiceErrorObject, BaseResponseError } from '../../..';

export class ValidationResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject, data?: ValidationError[] | unknown) {
    super(error.message, 400, error.code, data);
  }
}

