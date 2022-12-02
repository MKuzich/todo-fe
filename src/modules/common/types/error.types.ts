export interface IError {
  status: string;
  code: number;
  message: string;
}

export interface IAxiosError {
  response: {
    data: IError;
  };
}
