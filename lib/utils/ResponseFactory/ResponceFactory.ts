import { ServiceErrorResponse, ServiceSuccessResponse, BaseResponseError } from '.';

export class ResponseFactory {
  public static createServiceErrorResponse(err: BaseResponseError) {
    const message = err.statusCode === 500 ? 'Internal error' : err.message;

    return new ServiceErrorResponse(message, err.code, err.body, err.body?.length ?? null);
  }
  public static createServiceSuccessResponse(data?: any, count?: number) {
    return new ServiceSuccessResponse(data, count ?? data?.length);
  }
}
