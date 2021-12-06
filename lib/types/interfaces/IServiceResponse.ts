export interface IServiceResponse<T> {
  code: number;
  message: string;
  count: number | null;
  data: T;
}
