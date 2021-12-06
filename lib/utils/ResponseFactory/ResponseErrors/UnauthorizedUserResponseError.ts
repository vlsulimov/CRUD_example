import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class UnauthorizedUserResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 401, error.code);
  }
}
