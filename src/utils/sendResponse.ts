import { Response } from "express";

type IApiResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string | null;
  data?: T | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    data: data.data || null,
    meta: data.meta || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
