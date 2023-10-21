/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import { Room } from './features/game/models';

declare global {
	var rooms: Record<string, Room>;
}
