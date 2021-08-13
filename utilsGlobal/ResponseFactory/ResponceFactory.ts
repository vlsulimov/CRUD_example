import { BaseResponseError } from './ResponseErrors/BaseResponseError';
import { ServiceErrorResponse } from './ServiceErrorResponse';
import { ServiceSuccessResponse } from './ServiceSuccessResponse';

export class ResponseFactory {
  public static createServiceErrorResponse(err: BaseResponseError) {
    const message = err.statusCode === 500 ? 'Internal error' : err.message;

    return new ServiceErrorResponse(message, err.code);
  }
  public static createServiceSuccessResponse(data?: any, count?: number) {
    return new ServiceSuccessResponse(data, count ?? data?.length);
  }
}
