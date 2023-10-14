import { config } from 'dotenv';

const path = process.env.APP_MODE === 'development' ? '.env.development' : '.env';
config({ path });
