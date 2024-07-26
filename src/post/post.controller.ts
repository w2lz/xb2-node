import { NextFunction, Request, Response } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 */

export const index = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (request.headers.authorization !== 'SECRET') {
    return next(new Error());
  }
  const posts = await getPosts();
  response.send(posts);
};
