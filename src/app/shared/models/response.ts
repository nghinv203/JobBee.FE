export interface IResponse<T = any> {
  status: number;
  message: string;
  data: T | any[];
}
