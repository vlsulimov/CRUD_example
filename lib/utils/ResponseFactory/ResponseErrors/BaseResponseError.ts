export class BaseResponseError extends Error {
  public statusCode: number;
  public code: number;

  public constructor(message: string, statusCode?: number, code?: number) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.code = code ?? 1;
  }
}
