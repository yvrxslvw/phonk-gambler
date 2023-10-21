import { Card } from '../card';

type Status = '' | '**Победа**' | '**Поражение**' | '**Блэкджэк**';

export class Dealer {
	public name = 'Дилер';

	public cards: Card[] = [];

	public score = 0;

	public status: Status = '';
}
