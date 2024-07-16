import { NextFunction, Request, Response } from 'express';

/**
 * 内容列表
 */

export const index = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.send('内容接口列表');
};
