export interface IResponse<T = any> {
  statusCode: number;
  message: string;
  data: T | any[];
}
