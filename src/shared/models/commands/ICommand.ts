interface OptionChoice {
	name: string;
	value: string;
}

interface CommandOption {
	name: string;
	description: string;
	type: number;
	required: boolean;
	choices?: OptionChoice[];
}

export interface ICommand {
	name: string;
	description: string;
	options?: CommandOption[];
}
