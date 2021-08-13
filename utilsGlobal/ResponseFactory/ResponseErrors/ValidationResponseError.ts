import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../../typesGlobal';

export class ValidationResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 400, error.code);
  }
}
