import { Action, createReducer } from '@ngrx/store';

const dayColumn = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const date = new Date(Date.now());

export const initialState: string[] = [
	'City Name',
	...dayColumn.slice(date.getDay(), dayColumn.length),
	...dayColumn.slice(0, date.getDay()),
];

const _dailyHeaderRowReducer = createReducer(initialState);

export function dailyHeaderRowReducer(state: string[] | undefined, action: Action): string[] {
	return _dailyHeaderRowReducer(state, action);
}
