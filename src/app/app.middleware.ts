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

/**
 * 默认异常处理器
 */

export const defaultErrorhandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  let statusCode: number, message: string;
  switch (error.message) {
    default:
      statusCode = 500;
      message = '服务暂时出了点问题～～';
  }
  response.status(statusCode).send({ message });
};
