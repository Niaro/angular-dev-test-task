import { Action, createReducer } from '@ngrx/store';

const hours: string[] = [];
let hour = new Date(Date.now()).getHours();

for (let i = 0; i < 8; i++) {
	hours.push(`${hour}:00`);
	hour = hour + 3;
}

export const initialState: string[] = ['City Name', ...hours];

const _hourlyHeaderRowReducer = createReducer(initialState);

export function hourlyHeaderRowReducer(state: string[] | undefined, action: Action): string[] {
	return _hourlyHeaderRowReducer(state, action);
}
