import { ServiceErrorResponse, ServiceSuccessResponse, BaseResponseError } from '.';

export class ResponseFactory {
  public static createServiceErrorResponse(err: BaseResponseError) {
    const message = err.statusCode === 500 ? 'Internal error' : err.message;

    return new ServiceErrorResponse(message, err.code, err.data, err.data?.length ?? null);
  }
  public static createServiceSuccessResponse<T = any>(data?: T, count?: number) {
    return new ServiceSuccessResponse(
      data,
      count ?? (data && Array.isArray(data) ? data.length : undefined)
    );
  }
}
