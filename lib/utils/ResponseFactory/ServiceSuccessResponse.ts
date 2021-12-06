import { BaseResponse } from '.';

export class ServiceSuccessResponse extends BaseResponse {
  public constructor(data?: any, count?: number) {
    super('ok', 0, data, count);
  }
}
