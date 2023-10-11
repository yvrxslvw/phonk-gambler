import { OptionChoice } from './OptionChoice';

export interface CommandOption {
	name: string;
	description: string;
	type: number;
	required: boolean;
	choices?: OptionChoice[];
}
