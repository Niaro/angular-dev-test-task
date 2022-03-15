import { Action, createReducer, on } from '@ngrx/store';
import { addDailyRow } from 'apps/weather-forecast/src/app/store/daily-rows/daily-rows.actions';
import { TableRow } from 'apps/weather-forecast/src/app/core/table-row.interface';

export const initialState: string[][] = [];

const _dailyRowsReducer = createReducer(
	initialState,
	on(addDailyRow, (state: string[][], addedDailyInfo: TableRow) => {
		return [...state, [addedDailyInfo.name, ...addedDailyInfo.temps]];
	})
);

export function dailyRowsReducer(state: string[][] | undefined, action: Action): string[][] {
	return _dailyRowsReducer(state, action);
}
