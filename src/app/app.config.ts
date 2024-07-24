import dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config();

/**
 * 应用配置
 */
export const { APP_PORT } = process.env;

/**
 * 数据仓库配置
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
