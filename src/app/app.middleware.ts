import { NextFunction, Request, Response } from 'express';

/**
 * 输出请求地址
 */

export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.url);
  next();
};
