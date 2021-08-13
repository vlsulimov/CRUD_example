import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../../typesGlobal';

export class BusinessLogicResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 409, error.code);
  }
}
