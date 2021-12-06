export class BaseResponseError extends Error {
  public statusCode: number;
  public code: number;
  public data: any | null;

  public constructor(message: string, statusCode?: number, code?: number, data?: any) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.code = code ?? 1;
    this.data = data ?? null;
  }
}
