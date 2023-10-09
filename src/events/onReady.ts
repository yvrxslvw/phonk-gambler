import { client } from '../config/client';

client.on('ready', () => console.log(`${client.user?.tag} has been logged.`));
