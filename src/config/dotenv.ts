import dotenv from 'dotenv';
dotenv.config({ path: process.env.APP_MODE === 'development' ? '.env.development' : '.env' });
