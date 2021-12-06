import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class BusinessLogicResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject, data?: unknown) {
    super(error.message, 409, error.code, data);
  }
}
