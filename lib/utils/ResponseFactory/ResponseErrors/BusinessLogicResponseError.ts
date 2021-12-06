import { BaseResponseError } from './BaseResponseError';
import { IServiceErrorObject } from '../../..';

export class BusinessLogicResponseError extends BaseResponseError {
  public constructor(error: IServiceErrorObject) {
    super(error.message, 409, error.code);
  }
}
