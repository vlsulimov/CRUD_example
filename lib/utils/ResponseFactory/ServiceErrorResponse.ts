import { BaseResponse } from './BaseResponse';

export class ServiceErrorResponse extends BaseResponse {
  public constructor(message: string, code: number) {
    super(message, code);
  }
}
