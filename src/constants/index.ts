import dotenv from 'dotenv';
import { DOTENV_PATH } from './dotenv';

dotenv.config({ path: DOTENV_PATH });

export * from './bot';
export * from './database';
export * from './intents';
