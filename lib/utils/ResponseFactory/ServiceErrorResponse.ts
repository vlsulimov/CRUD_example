import { BaseResponse } from '.';

export class ServiceErrorResponse extends BaseResponse {
  public constructor(message: string, code: number, body?: any, count?: number) {
    super(message, code, body, count);
  }
}
