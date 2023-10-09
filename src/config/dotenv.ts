import dotenv from 'dotenv';

const DOTENV_PATH = process.env.APP_MODE === 'development' ? '.env.development' : '.env';

dotenv.config({ path: DOTENV_PATH });
