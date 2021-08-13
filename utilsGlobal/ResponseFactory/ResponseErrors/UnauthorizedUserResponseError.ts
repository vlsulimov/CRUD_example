import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../../typesGlobal';

export class UnauthorizedUserResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 401, error.code);
  }
}
