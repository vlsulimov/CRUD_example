import { IServiceResponse } from '../..';

export class BaseResponse implements IServiceResponse<any> {
  public message: string;
  public code: number;
  public data: any;
  public count: number | null;

  public constructor(message: string, code: number, data?: any, count?: number) {
    this.message = message;
    this.code = code;
    this.data = data ?? null;
    this.count = count ?? null;
  }
}
