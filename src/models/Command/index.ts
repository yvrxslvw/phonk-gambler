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

export class Command {
	public name: string;
	public description: string;
	public options?: CommandOption[];

	constructor(name: string, description: string, options?: CommandOption[]) {
		this.name = name;
		this.description = description;
		this.options = options;
	}
}
