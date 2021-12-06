import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class AccessDeniedResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 403, error.code);
  }
}
