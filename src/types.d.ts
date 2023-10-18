/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { Room } from './models';

declare global {
	var rooms: Record<string, Room>;
}
