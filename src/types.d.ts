import { Room } from './models';

declare global {
	var rooms: Record<string, Room>;
}
