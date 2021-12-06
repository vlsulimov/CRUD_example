import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class UnauthorizedUserResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject, data: unknown) {
    super(error.message, 401, error.code, data);
  }
}
