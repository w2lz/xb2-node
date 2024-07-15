import dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config();

export const { APP_PORT } = process.env;
