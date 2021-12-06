import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class NotFoundResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject, data: unknown) {
    super(error.message, 404, error.code, data);
  }
}
