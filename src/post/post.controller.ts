import { NextFunction, Request, Response } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 */

export const index = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const data = getPosts();
  response.send(data);
};
