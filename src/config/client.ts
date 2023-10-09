import { Client } from 'discord.js';
import { BOT_DATA } from '../shared';

export const client = new Client({ intents: BOT_DATA.INTENTS });
