import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../../typesGlobal';

export class NotFoundResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 404, error.code);
  }
}
